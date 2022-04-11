export function float64equals(a: number, b: number): boolean {
    if (!Number.isFinite(a) || !Number.isFinite(b)) {
        return a === b;
    }
    if (b === 0) {
        return a === b;
    }
    return Math.abs((a - b) / b) < 1e-14;
}
