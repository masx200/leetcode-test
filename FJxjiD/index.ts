export default function chickenCoolRun(paths: number[][]): number {
    let dp = [
        paths[0][0] === 0 ? 1 : Infinity,
        0,
        paths[2][0] === 0 ? 1 : Infinity,
    ];

    const n = paths[0].length;

    for (let j = 1; j < n; j++) {
        const temp = dp.map((v, i) =>
            dp[i] < Infinity && paths[i][j] === 0 ? v : Infinity
        );

        if (paths[1][j] === 0) {
            temp[1] = Math.min(
                temp[1],
                temp[0] < Infinity ? temp[0] + 1 : Infinity,
                temp[2] < Infinity ? temp[2] + 1 : Infinity
            );

            temp[0] = Math.min(
                temp[0],
                paths[0][j] === 0 ? temp[1] + 1 : Infinity
            );
            temp[2] = Math.min(
                temp[2],
                paths[2][j] === 0 ? temp[1] + 1 : Infinity
            );
        }

        dp = temp;
    }

    const changes = Math.min(...dp);

    return changes < Infinity ? changes : -1;
}
