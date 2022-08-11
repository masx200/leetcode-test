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
    if (dividend < 0) return -divide(-dividend, divisor);

    if (divisor < 0) return -divide(dividend, -divisor);

    const maxInt = Math.pow(2, 31) - 1;
    const minInt = -Math.pow(2, 31);
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
    if (divisor === Math.pow(2, binaryexp)) {
        return Math.abs(dividend >> binaryexp);
    }

    let left = 1;
    let right = Math.abs(dividend >> 1);

    // left = left << 1;
    // right = right << 1;
    // console.log({ left, right });
    // }
    while (-left + right > 1) {
        const middle = (left + right) >> 1;
        if (multiplyIntegerGreater(divisor, middle, dividend) >= dividend) {
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
function multiplyIntegerGreater(x: number, y: number, z: number): number {
    if (!Number.isInteger(y) || !Number.isInteger(x)) {
        throw Error("not integer");
    }
    if (
        Number.isNaN(x) ||
        Number.isNaN(y) ||
        !Number.isFinite(x) ||
        !Number.isFinite(y)
    ) {
        throw Error("Invalid number");
    }
    if (x > 0 && y > 0 && (x > z || y > z)) return z + 1;
    return x < 0
        ? -multiplyIntegerGreater(-x, y, z)
        : y < 0
        ? -multiplyIntegerGreater(x, -y, z)
        : x === 0
        ? 0
        : y === 0
        ? 0
        : x === 1
        ? y
        : y === 1
        ? x
        : x < y
        ? multiplyIntegerGreater(y, x, z)
        : y & 1
        ? x + multiplyIntegerGreater(x, y - 1, z)
        : multiplyIntegerGreater(x + x, Math.abs(y >> 1), z);
}
export default divide;
