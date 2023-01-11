export default function myPow(x: number, n: number): number {
    if (Number.isFinite(n) && !Number.isInteger(n)) {
        throw Error("not integer:" + n);
    }
    if (Number.isNaN(x) || Number.isNaN(n)) {
        throw Error("nan:" + x + "," + n);
    }
    if (x === Infinity) {
        return n > 0 ? Infinity : n < 0 ? 0 : 1;
    }
    if (x === -Infinity) {
        return (n % 2 === 0 ? 1 : -1) * myPow(-x, n);
    }
    if (n === Infinity) {
        return x === 0 ? 0 : Infinity;
    }
    if (n === -Infinity) {
        return x === 0 ? Infinity : 0;
    }
    const result =
        n === 1
            ? x
            : x < 0
            ? (n % 2 === 0 ? 1 : -1) * myPow(-x, n)
            : x === 1
            ? 1
            : x === 0
            ? 0
            : n === 0
            ? 1
            : n < 0
            ? myPow(1 / x, -n)
            : n % 2
            ? x * myPow(x, n - 1)
            : myPow(x * x, Math.floor(n / 2));
    return result;
}
