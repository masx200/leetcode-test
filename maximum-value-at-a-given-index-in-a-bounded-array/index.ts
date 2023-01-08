function maxValue(n: number, index: number, maxSum: number): number {
    let left = index;
    let right = n - index - 1;
    if (left > right) {
        const temp = left;
        left = right;
        right = temp;
    }

    let upper =
        ((left + 1) * (left + 1) - 3 * (left + 1)) / 2 +
        left +
        1 +
        (left + 1) +
        ((left + 1) * (left + 1) - 3 * (left + 1)) / 2 +
        right +
        1;
    if (upper >= maxSum) {
        const a = 1;
        const b = -2;
        const c = left + right + 2 - maxSum;
        return Math.floor((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
    }

    upper =
        ((2 * (right + 1) - left - 1) * left) / 2 +
        (right + 1) +
        ((right + 1) * (right + 1) - 3 * (right + 1)) / 2 +
        right +
        1;
    if (upper >= maxSum) {
        const a = 1.0 / 2;
        const b = left + 1 - 3.0 / 2;
        const c = right + 1 + ((-left - 1) * left) / 2 - maxSum;
        return Math.floor((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a));
    } else {
        const a = left + right + 1;
        const b = (-left * left - left - right * right - right) / 2 - maxSum;
        return Math.floor(-b / a);
    }
}
export default maxValue;
