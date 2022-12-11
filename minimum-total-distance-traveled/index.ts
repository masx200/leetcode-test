import memoize from "https://cdn.skypack.dev/lodash@4.17.21/memoize?dts";
export default function minimumTotalDistance(
    robot: number[],
    factory: number[][]
): number {
    factory.sort((a, b) => a[0] - b[0]);
    robot.sort((a, b) => a - b);

    const n = factory.length,
        m = robot.length;

    const dfs = memoize(
        (i: number, j: number): number => {
            if (j === m) return 0;

            if (i === n - 1) {
                if (m - j > factory[i][1]) return Infinity;
                return robot
                    .slice(j)
                    .reduce((p, x) => p + Math.abs(x - factory[i][0]), 0);
            }
            let res = dfs(i + 1, j);

            for (let s = 0, k = 1; k <= factory[i][1] && j + k - 1 < m; k++) {
                s += Math.abs(robot[j + k - 1] - factory[i][0]);
                res = Math.min(res, s + dfs(i + 1, j + k));
            }

            return res;
        },
        (i: number, j: number) => JSON.stringify([i, j])
    );
    return dfs(0, 0);
}
