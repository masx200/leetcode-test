export default function countDigitOne(n: number): number {
    let count = 0;

    for (let i = 1; i <= n; i *= 10) {
        const divide = i * 10;
        const p = Math.floor(n / divide),
            k = n % divide;
        let rest = 0;

        count += p * i;
        rest = k > 2 * i - 1 ? i : k < i ? 0 : k - i + 1;
        count += rest;
    }
    return count;
}
