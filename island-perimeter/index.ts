export default function islandPerimeter(grid: number[][]): number {
    const m = grid.length;
    if (m === 0) return 0;
    const n = grid[0].length;
    if (n === 0) return 0;
    let perimeter = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                perimeter += 4;

                if (i - 1 >= 0 && grid[i - 1][j] === 1) perimeter--;
                if (j - 1 >= 0 && grid[i][j - 1] === 1) perimeter--;
                if (i + 1 <= m - 1 && grid[i + 1][j] === 1) perimeter--;
                if (j + 1 <= n - 1 && grid[i][j + 1] === 1) perimeter--;
            }
        }
    }

    return perimeter;
}
