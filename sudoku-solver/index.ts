export default function solveSudoku(board: string[][]): void {
    const spaces: [number, number][] = [];

    const rows = new Array(9).fill(0).map(() => number_char_set(false));
    const columns = new Array(9).fill(0).map(() => number_char_set(false));
    const subboxes = new Array(3)
        .fill(0)
        .map(() => new Array(3).fill(0).map(() => number_char_set(false)));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const char = board[i][j];
            if (char === ".") {
                // if (Math.random() - 0.5 > 0) {
                spaces.push([i, j]);
                // } else {
                //   spaces.unshift([i, j]);
                // }
            } else {
                rows[i][char] = true;
                columns[j][char] = true;
                subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char] = true;
            }
        }
    }
    if (spaces.length === 0) {
        return;
    }
    const sorted: [number, number, Array<string>][] = spaces
        .map(
            ([row, column]) =>
                [row, column, get_available_chars(row, column)] as [
                    number,
                    number,
                    Array<string>,
                ],
        )
        .sort((a, b) => -a[2].length + b[2].length);
    // spaces.length = 0;
    // for (const [row, column] of sorted) {
    //   spaces.push([row, column]);
    // }

    function get_available_chars(row: number, column: number): Array<string> {
        const array = Array.from({ length: 9 }).map((_v, i) => String(i + 1));
        const charset = new Set(array);
        for (const char of array) {
            if (
                rows[row][char] ||
                columns[column][char] ||
                subboxes[Math.floor(row / 3)][Math.floor(column / 3)][char]
            ) {
                charset.delete(char);
            }
        }
        return Array.from(charset);
    }
    function dfs(pos: number): boolean {
        if (pos < 0) {
            return true;
        }
        const [i, j, chars] = sorted[pos];
        // const chars =

        // Array.from({ length: 9 })
        //.map((_v, i) => String(i + 1))
        // .sort(() => Math.random() - 0.5);
        for (const char of chars.sort(() => Math.random() - 0.5)) {
            if (
                !rows[i][char] &&
                !columns[j][char] &&
                !subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char]
            ) {
                rows[i][char] = true;
                columns[j][char] = true;
                subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char] = true;

                board[i][j] = char;
                if (dfs(pos - 1)) {
                    return true;
                }
                rows[i][char] = false;
                columns[j][char] = false;
                subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char] = false;
            }
        }
        return false;
    }

    dfs(spaces.length - 1);
    return;
}
function number_char_set(def: boolean): Record<string, boolean> {
    return {
        1: def,
        2: def,
        3: def,
        4: def,
        5: def,
        6: def,
        7: def,
        8: def,
        9: def,
    };
}
