export default function longestCommonPrefix(strs: string[]): string {
    let ret = "";
    const len = Math.min(...strs.map((s) => s.length));
    for (let i = 0; i < len; i++) {
        for (const s of strs) {
            if (s[i] !== strs[0][i]) {
                return ret;
            }
        }
        ret += strs[0][i];
    }
    return ret;
}
