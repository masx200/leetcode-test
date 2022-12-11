export default function countPoints(
    points: number[][],
    queries: number[][]
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
    r: number
): boolean {
    return r ** 2 - (n - x) ** 2 - (y - m) ** 2 >= 0;
    // return n <= x + r && m <= y + r && n >= x - r && m >= y - r
    //     ? n === x
    //         ? Math.abs(m - y) <= r
    //         : y === m
    //         ? Math.abs(x - n) <= r
    //         : r ** 2 - (n - x) ** 2 - (y - m) ** 2 >= 0
    //     : false;
}
