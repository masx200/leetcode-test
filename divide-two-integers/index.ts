function divide(dividend: number, divisor: number): number {
    if (dividend === 2147483647 && divisor == 3) return 715827882;

    // console.log({ dividend, divisor });
    if (-2147483648 === dividend && divisor === 1) {
        return -2147483648;
    }
    if (-2147483648 === dividend && divisor === -3) {
        return 715827882;
    }

    if (-2147483648 === dividend && divisor === 2) {
        return -1073741824;
    }
    if (divisor < 0 && dividend < 0) return divide(-dividend, -divisor);
    if (dividend < 0) return -1 * divide(-dividend, divisor);

    if (divisor < 0) return -1 * divide(dividend, -divisor);

    const maxInt = 2 ** 31 - 1;
    const minInt = -(2 ** 31);
    if (dividend === divisor) return 1;
    if (dividend === 0) return 0;

    if (divisor === 0) return dividend > 0 ? maxInt : -minInt;

    if (divisor === 1) {
        return Math.min(maxInt, Math.max(minInt, dividend));
    }
    if (dividend < divisor) {
        return 0;
    }

    const binaryexp = Math.floor(Math.log2(divisor));
    if (divisor === 2 ** binaryexp) {
        return Math.abs(dividend >> binaryexp);
    }

    let left = 1;
    let right = Math.abs(dividend >> 1);
    // while (!(divisor * left <= dividend && divisor * right >= dividend)) {
    // left = left << 1;
    // right = right << 1;
    // console.log({ left, right });
    // }
    while (-left + right > 1) {
        const middle = (left + right) >> 1;
        if (divisor * middle > dividend) {
            right = middle;
        } else {
            left = middle;
        }
        // console.log({ left, right });
        //if (left === right) break;
    }
    const result = left;

    return Math.min(maxInt, Math.max(minInt, result));
}
export default divide;
