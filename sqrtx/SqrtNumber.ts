export function SqrtNumber(x: number, delta: number = Number.EPSILON): number {
    if (x < 0) {
        throw Error("should greater than 0:" + x);
    }
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    let y = x;
    let z = x;
    while (z == x || Math.abs(z - y) > delta) {
        z = y;
        y = (x + y * y) / 2 / y;
    }
    return Math.abs(y);
}
