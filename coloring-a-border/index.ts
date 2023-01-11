export default function colorBorder(
    grid: number[][],
    row: number,
    col: number,
    color: number
): number[][] {
    const m = grid.length,
        n = grid[0].length;
    const visited: boolean[][] = new Array(m)
        .fill(0)
        .map(() => new Array(n).fill(false));
    const borders: [number, number][] = [];
    const originalColor = grid[row][col];
    const direc = [
        [0, 1],
        [0, -1],
        [1, 0],
        [-1, 0],
    ];
    const q: [number, number][] = [];
    q.push([row, col]);
    visited[row][col] = true;
    while (q.length) {
        const node = q.pop() as [number, number];
        const x = node[0],
            y = node[1];

        let isBorder = false;
        for (let i = 0; i < 4; i++) {
            const nx = direc[i][0] + x,
                ny = direc[i][1] + y;
            if (
                !(
                    nx >= 0 &&
                    nx < m &&
                    ny >= 0 &&
                    ny < n &&
                    grid[nx][ny] === originalColor
                )
            ) {
                isBorder = true;
            } else if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                q.push([nx, ny]);
            }
        }
        if (isBorder) {
            borders.push([x, y]);
        }
    }
    for (let i = 0; i < borders.length; i++) {
        const x = borders[i][0],
            y = borders[i][1];
        grid[x][y] = color;
    }
    return grid;
}
