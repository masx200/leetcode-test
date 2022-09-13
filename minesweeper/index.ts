export default function updateBoard(
    board: string[][],
    click: number[],
): string[][] {
    const [row, col] = click;
    if (board[row][col] === "M") {
        board[row][col] = "X";
        return board;
    }
    if (board[row][col] === "E") {
        const validpos = dirs.map((v) => [row + v[0], col + v[1]]).filter((v) =>
            typeof board[v[0]]?.[v[1]] !== "undefined"
        );
        const count = validpos.reduce(
            (a, v) => a + Number(["X", "M"].includes(board[v[0]][v[1]])),
            0,
        );
        if (
            count > 0
        ) board[row][col] = String(count);
        else {
            board[row][col] = "B";
            return validpos.reduce(
                (b, v) => updateBoard(b, [v[0], v[1]]),
                board,
            );
        }
        return board;
    }
    return board;
}
const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, 1], [
    -1,
    -1,
]];
