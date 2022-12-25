function countHomogenous(s: string): number {
    const MOD = 1000000007;
    let res = 0;
    let prev = s[0];
    let cnt = 0;
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === prev) {
            cnt++;
        } else {
            res += (cnt + 1) * cnt / 2;
            cnt = 1;
            prev = c;
        }
    }
    res += (cnt + 1) * cnt / 2;
    return res % MOD;
}
export default countHomogenous;
