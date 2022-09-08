export default function gameOfLife(board: number[][]): void {
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
    const result = board.map((a, i) =>
        a.map((v, j) => {
            const all = dirs
                .map(([r, c]) => board[i + r]?.[j + c])
                .filter(Boolean) as number[];

            if (all.length < 2 || all.length > 3) return 0;
            if (all.length === 3) return 1;
            return v;
        })
    );

    result.forEach((a, i) => a.forEach((v, j) => (board[i][j] = v)));
}
