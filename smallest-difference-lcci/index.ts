export default function smallestDifference(a: number[], b: number[]): number {
    return [
        ...a.sort((x, y) => x - y).map((v) => [v, 1]),
        ...b.sort((x, y) => x - y).map((v) => [v, 0]),
    ]
        .sort((a, b) => a[0] - b[0])
        .reduce(
            (p, v, i, a) =>
                Math.min(
                    p,
                    i === 0 || v[1] === a[i - 1][1]
                        ? 2147483647
                        : Math.abs(v[0] - a[i - 1][0])
                ),
            2147483647
        );
}
