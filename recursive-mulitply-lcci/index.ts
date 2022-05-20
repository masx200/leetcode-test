export default function multiply(x: number, y: number): number {
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
    return x < 0
        ? -multiply(-x, y)
        : y < 0
        ? -multiply(x, -y)
        : x === 0
        ? 0
        : y === 0
        ? 0
        : x === 1
        ? y
        : y === 1
        ? x
        : x < y
        ? multiply(y, x)
        : y & 1
        ? x + multiply(x, y - 1)
        : multiply(x + x, Math.abs(y >> 1));
}
