export function uniqueStraightLineEquation(
    a: number,
    b: number,
    c: number,
): [number, number, number] {
    if (c < 0) {
        return uniqueStraightLineEquation(-a, -b, -c);
    }
    const k = Math.abs(a === 0 ? b : a);
    a /= k;
    b /= k;
    c /= k;
    return [a, b, c];
}
