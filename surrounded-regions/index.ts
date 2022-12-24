function solve(board: string[][]): void {
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    const n = board.length;
    if (n == 0) {
        return;
    }
    const m = board[0].length;
    const queue = new Array<[number, number]>();
    for (let i = 0; i < n; i++) {
        if (board[i][0] == "O") {
            queue.push([i, 0]);
            board[i][0] = "A";
        }
        if (board[i][m - 1] == "O") {
            queue.push([i, m - 1]);
            board[i][m - 1] = "A";
        }
    }
    for (let i = 1; i < m - 1; i++) {
        if (board[0][i] == "O") {
            queue.push([0, i]);
            board[0][i] = "A";
        }
        if (board[n - 1][i] == "O") {
            queue.push([n - 1, i]);
            board[n - 1][i] = "A";
        }
    }
    while (!(queue.length === 0)) {
        const cell = queue.shift() as [number, number];
        const x = cell[0],
            y = cell[1];
        for (let i = 0; i < 4; i++) {
            const mx = x + dx[i],
                my = y + dy[i];
            if (
                mx < 0 ||
                my < 0 ||
                mx >= n ||
                my >= m ||
                board[mx][my] != "O"
            ) {
                continue;
            }
            queue.push([mx, my]);
            board[mx][my] = "A";
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] == "A") {
                board[i][j] = "O";
            } else if (board[i][j] == "O") {
                board[i][j] = "X";
            }
        }
    }
}
export default solve;
