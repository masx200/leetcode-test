export default function getPermutation(n: number, k: number): string {
    const factorial = Array<number>(n).fill(0);
    factorial[0] = 1;
    for (let i = 1; i < n; ++i) {
        factorial[i] = factorial[i - 1] * i;
    }

    --k;
    const ans = new Array<string>();
    const valid = Array<number>(n + 1).fill(1);

    for (let i = 1; i <= n; ++i) {
        let order = Math.floor(k / factorial[n - i] + 1);
        for (let j = 1; j <= n; ++j) {
            order -= valid[j];
            if (order == 0) {
                ans.push(j.toString());
                valid[j] = 0;
                break;
            }
        }
        k %= factorial[n - i];
    }
    return ans.join("");
}
