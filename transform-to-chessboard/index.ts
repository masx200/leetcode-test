export default function movesToChessboard(board: number[][]): number {
    const n = board.length;

    if (
        board.some((a, i) =>
            a.some((v, j) => board[0][0] ^ board[i][0] ^ board[0][j] ^ v)
        )
    ) {
        return -1;
    }

    const rowSum = board.reduce((a, _v, i) => a + board[0][i], 0);
    const colSum = board.reduce((a, v, _i) => a + v[0], 0);

    if (
        Math.floor(n / 2) > rowSum ||
        rowSum > Math.floor((n + 1) / 2) ||
        Math.floor(n / 2) > colSum ||
        colSum > Math.floor((n + 1) / 2)
    ) {
        return -1;
    }
    const rowDiff = board.reduce((a, v, i) => a + Number(v[0] == i % 2), 0);
    const colDiff = board.reduce(
        (a, _v, i) => a + Number(board[0][i] == i % 2),
        0,
    );

    const rD = n % 2
        ? rowDiff % 2 ? n - rowDiff : rowDiff
        : Math.min(n - rowDiff, rowDiff);

    const cD = n % 2
        ? colDiff % 2 ? n - colDiff : colDiff
        : Math.min(n - colDiff, colDiff);
    return Math.floor((rD + cD) / 2);
}
