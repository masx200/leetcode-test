function isInterleave(s1: string, s2: string, s3: string): boolean {
    const n = s1.length,
        m = s2.length,
        t = s3.length;

    if (n + m != t) {
        return false;
    }

    const f = new Array<boolean>(m + 1).fill(false);

    f[0] = true;
    for (let i = 0; i <= n; ++i) {
        for (let j = 0; j <= m; ++j) {
            const p = i + j - 1;
            if (i > 0) {
                f[j] = f[j] && s1.charAt(i - 1) == s3.charAt(p);
            }
            if (j > 0) {
                f[j] = f[j] || (f[j - 1] && s2.charAt(j - 1) == s3.charAt(p));
            }
        }
    }

    return f[m];
}
export default isInterleave;
