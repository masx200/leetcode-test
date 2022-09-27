export default function diagonalSum(e: number[][]) {
    return e.reduce(
        (e, _n, r, t) =>
            r === t.length - r - 1
                ? e + t[r][r]
                : e + t[r][r] + t[r][t.length - r - 1],
        0,
    );
}
