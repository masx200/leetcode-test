function maxDistance(grid: number[][]): number {
    const n = grid.length;
    const queue: [number, number][] = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 将所有陆地加入队列，而不是海洋，陆地不断扩展到海洋
            if (grid[i][j] == 1) {
                queue.push([i, j]);
            }
        }
    }

    let ans = -1;
    // 都是海洋 或 都是陆地
    if (queue.length === 0 || queue.length === n * n) {
        return ans;
    }

    // 方向数组
    const locations = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0],
    ];

    while (queue.length != 0) {
        const len = queue.length;

        // 对每个陆地4个方向搜索
        for (let k = 0; k < len; k++) {
            const [x, y] = queue.shift() as [number, number];
            // 向该点的4个方向进行搜索
            for (const location of locations) {
                const nextI = x + location[0];
                const nextJ = y + location[1];

                // 合法 且 是海洋
                if (
                    nextI >= 0 &&
                    nextI < n &&
                    nextJ >= 0 &&
                    nextJ < n &&
                    grid[nextI][nextJ] == 0
                ) {
                    grid[nextI][nextJ] = 1; // 变为陆地
                    queue.push([nextI, nextJ]);
                }
            }
        }
        ans++;
    }
    return ans;
}
export default maxDistance;
