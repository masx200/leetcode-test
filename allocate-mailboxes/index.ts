export default function minDistance(houses: number[], k: number): number {
    const n = houses.length;

    houses.sort((a, b) => a - b);

    const medsum: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));

    for (let i = n - 2; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            medsum[i][j] = medsum[i + 1][j - 1] + houses[j] - houses[i];
        }
    }
    const f: number[][] = Array(n).fill(0).map(() =>
        Array(k + 1).fill(Infinity)
    );

    for (let i = 0; i < n; ++i) {
        f[i][1] = medsum[0][i];
        for (let j = 2; j <= k && j <= i + 1; ++j) {
            for (let i0 = 0; i0 < i; ++i0) {
                f[i][j] = Math.min(f[i][j], f[i0][j - 1] + medsum[i0 + 1][i]);
            }
        }
    }

    return f[n - 1][k];
}
