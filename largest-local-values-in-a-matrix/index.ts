export default function largestLocal(grid: number[][]): number[][] {
    const dirs = [
        [-1, -1],

        [-1, 0],

        [-1, 1],

        [0, -1],

        [0, 1],

        [1, -1],

        [1, 0],

        [1, 1],
    ];

    return new Array(grid.length - 2).fill(0).map((_, i) =>
        Array(grid.length - 2).fill(0).map((_, j) => {
            return Math.max(
                grid[i + 1][j + 1],
                ...dirs
                    .map(([r, c]) => grid[i + 1 + r]?.[j + 1 + c]),
            );
        })
    );
}
