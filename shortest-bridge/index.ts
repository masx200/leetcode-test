export default function shortestBridge(grid: number[][]): number {
    const directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    let firstIsland: [number, number][] = [];
    loop:
    for (const [i, a] of grid.entries()) {
        for (const [j, v] of a.entries()) {
            if (v === 1) {
                firstIsland.push([i, j]);

                for (const [x, y] of firstIsland) {
                    grid[x][y] = 2;
                    for (const [q, w] of directions) {
                        const [e, r] = [x + q, y + w];
                        if (grid[e]?.[r] === 1) {
                            firstIsland.push([e, r]);
                            grid[e][r] = 2;
                        }
                    }
                }
                break loop;
            }
        }
    }

    let step = 0;
    while (firstIsland.length) {
        const temp: [number, number][] = [];
        for (const [x, y] of firstIsland) {
            grid[x][y] = 2;
            for (const [q, w] of directions) {
                const [e, r] = [x + q, y + w];
                if (grid[e]?.[r] === 1) {
                    return step;
                }
                if (grid[e]?.[r] === 0) {
                    temp.push([e, r]);
                    grid[e][r] = 2;
                }
            }
        }
        step++;
        firstIsland = temp;
    }
    return -1;
}
