function nearestValidPoint(x: number, y: number, points: number[][]): number {
    return points.reduce(
        ([p, d], [a, b], i) =>
            (x === a || y === b) && Math.abs(x - a) + Math.abs(y - b) < d
                ? [i, Math.abs(x - a) + Math.abs(y - b)]
                : [p, d],
        [-1, Infinity]
    )[0];
}
export default nearestValidPoint;
