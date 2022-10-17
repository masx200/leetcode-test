export default function atMostNGivenDigitSet(
    digits: string[],
    n: number
): number {
    const s = String(n);
    const len = s.length;
    let ans = [...Array(len - 1).keys()].reduce(
        (a, i) => a + Math.pow(digits.length, i + 1),
        0
    );
    // console.log(ans)

    for (const [i, c] of s.split("").entries()) {
        ans +=
            Math.pow(digits.length, len - i - 1) *
            digits.filter((d) => d < c).length;

        if (!digits.includes(c)) return ans;
    }
    return ans + 1;
}
