export default function exist(board: string[][], word: string): boolean {
    if (
        word.length === 1 &&
        board.length === 1 &&
        board[0].length === 1 &&
        word === board[0][0]
    ) {
        return true;
    }
    if (word.length === 0) return false;
    const row = board.length;
    if (!row) return false;
    const col = board[0].length;
    if (!col) return false;

    const first = word[0];

    const visited: boolean[][] = Array.from(board).map((a) =>
        Array.from(a).map(() => false)
    );
    // console.log(starts)
    const directions: Array<[number, number]> = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    function dfs(word: string, i: number, j: number): boolean {
        // console.log({ word, i, j })
        // console.log(visited)
        if (board[i][j] !== word[0]) return false;
        else if (word.length === 1) return true;

        visited[i][j] = true;
        // let result = false
        for (const [f, s] of directions) {
            const x = i + f;
            const y = j + s;
            if (x >= 0 && y >= 0 && x < row && y < col) {
                if (!visited[x][y]) {
                    if (dfs(word.slice(1), x, y)) {
                        visited[i][j] = false;
                        return true;
                    } /* else {

              // visited[x][y] = false
              //visited[i][j] = false;
            } */
                }
            }
        }
        visited[i][j] = false;
        return false;
    }

    const all_chars = new Set(board.flat());

    if (Array.prototype.some.call(word, (c) => !all_chars.has(c))) return false;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (first === board[i][j]) {
                const flag = dfs(word, i, j);
                if (flag) {
                    return true;
                }
            }
        }
    }
    return false;
}
