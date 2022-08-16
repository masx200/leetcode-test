function numDecodings(s: string): number {
    const n = s.length;

    let a = 0,
        b = 1,
        c = 0;
    for (let i = 1; i <= n; ++i) {
        c = 0;
        if (s[i - 1] !== "0") {
            c += b;
        }
        if (
            i > 1 &&
            s.charAt(i - 2) != "0" &&
            Number(s.slice(i - 2, i)) <= 26
        ) {
            c += a;
        }
        a = b;
        b = c;
    }
    return c;
}
export default numDecodings;
