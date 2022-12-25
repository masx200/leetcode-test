import memoize from "https://cdn.skypack.dev/lodash@4.17.21/memoize?dts";
function takeCharacters(s: string, k: number): number {
    const cnt = [0, 0, 0];
    for (const c of s) {
        cnt[c.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    if (cnt.some((a) => a < k)) {
        return -1;
    }

    if (k === 0) return 0;

    let res = Infinity;

    const dfs = memoize((s: string, cnt: number[], step: number) => {
        // console.log(s, cnt, step);
        if (cnt.every((a) => a >= k)) {
            res = Math.min(res, step);
            return;
        }

        if (s.length === 0) return;

        dfs(
            s.slice(1),
            cnt.map(
                (c, i) =>
                    c + Number(s[0].charCodeAt(0) === "a".charCodeAt(0) + i),
            ),
            step + 1,
        );
        dfs(
            s.slice(0, -1),
            cnt.map(
                (c, i) =>
                    c +
                    Number(
                        s[s.length - 1].charCodeAt(0) === "a".charCodeAt(0) + i,
                    ),
            ),
            step + 1,
        );
    });

    dfs(s, [0, 0, 0], 0);

    return res;
}

export default takeCharacters;
