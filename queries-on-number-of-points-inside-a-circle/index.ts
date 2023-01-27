export default function countPoints(
    points: number[][],
    queries: number[][],
): number[] {
    return queries.map(([x, y, r]) => {
        return points.reduce((a, [n, m]) => {
            return a + Number(point_in_circle(n, m, x, y, r));
        }, 0);
    });
}
function point_in_circle(
    n: number,
    m: number,
    x: number,
    y: number,
    r: number,
): boolean {
    return r ** 2 - (n - x) ** 2 - (y - m) ** 2 >= 0;
}
