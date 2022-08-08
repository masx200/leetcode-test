export default function makeLargestSpecial(s: string): string {
    const candidates = new Array<string>();
    for (let i = 0, cur = 0, last = 0; i < s.length; i++) {
        cur += s[i] === "1" ? 1 : -1;
        if (cur == 0) {
            candidates.push(
                "1" + makeLargestSpecial(s.substring(last + 1, i)) + "0",
            );
            last = i + 1;
        }
    }
    candidates.sort((a, b) => b.localeCompare(a));
    return candidates.join("");
}
