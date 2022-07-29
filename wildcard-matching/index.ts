// deno-lint-ignore-file ban-ts-comment
export default function isMatch(s: string, p: string): boolean {
    // console.log(s, p);
    if (s === p) return true;

    const words = p.split(/\*+/g);
    // console.log(words);

    if (words.length === 1) {
        return check_regular(s, p);
    }
    if (words.length === 2 && words[0] === "" && words[1] === "") {
        return true;
    }
    if (!check_includes(s, p)) return false;
    if (words.length >= 2) {
        return check_fixs(s, words);
    }

    return false;
}
function check_includes(s: string, p: string) {
    const words = Array.from(new Set(p.split(/\?|\*+/g).filter(Boolean)));

    if (
        words.some((word) => {
            return !s.includes(word);
        })
    ) {
        return false;
    }
    return true;
}
function check_fixs(s: string, words: string[]): boolean {
    // console.log("check_fixs", s, words);
    if (words.length >= 2) {
        const prefix = words[0];
        const suffix = words[words.length - 1];
        let str = s;
        if (suffix) {
            const matched = str.match(
                //@ts-ignore
                new RegExp(`^(.*?)${suffix.replaceAll("?", ".")}$`),
            );
            if (!matched) return false;
            str = matched[1];
        }
        if (prefix) {
            const matched = str.match(
                //@ts-ignore
                new RegExp(`^${prefix.replaceAll("?", ".")}(.*?)$`),
            );
            if (!matched) return false;
            str = matched[1];
        }
        const rest = words.slice(1, words.length - 1);
        return check_words(str, rest);
    }
    return false;
}
function check_regular(s: string, p: string): boolean {
    // console.log("check_regular", s, p);
    return new RegExp(
        //@ts-ignore
        "^" + p.replaceAll("?", ".") + "$",
        "g",
    ).test(s);
}
function check_words(s: string, words: string[]): boolean {
    // console.log("check_words", s, words);
    if (words.length === 0) return true;
    const mid_index = words.reduce(
        (a, v, i) => (v.length > words[a].length ? i : a),
        Math.floor(words.length / 2),
    );
    // const mid_index = Math.floor(words.length / 2);
    const middle = words[mid_index];
    const matched_array = Array.from(
        //@ts-ignore
        s.matchAll(new RegExp(`${middle.replaceAll("?", ".")}`, "g")),
    );

    // console.log(matched_array);
    if (!matched_array.length) return false;
    // matched_array.sort(() => Math.random() - 0.5);
    const first_half = words.slice(0, mid_index);
    const second_half = words.slice(mid_index + 1);
    return matched_array.some((matched) => {
        // console.log(matched);
        const length = matched[0].length;
        if ("number" !== typeof matched.index) return false;
        const left = s.slice(0, matched.index);
        const right = s.slice(matched.index + length);
        return check_words(left, first_half) && check_words(right, second_half);
    });
}
