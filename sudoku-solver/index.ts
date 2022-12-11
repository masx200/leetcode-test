function solveSudoku(board: string[][]): void {
    const spaces: number[] = [];
    const rows = new Array(9).fill(0).map(() => number_char_set(false));
    const columns = new Array(9).fill(0).map(() => number_char_set(false));
    const subboxes = new Array(3)
        .fill(0)
        .map(() => new Array(3).fill(0).map(() => number_char_set(false)));
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const char = board[i][j];
            if (char === ".") {
                spaces.push(pair_to_index(i, j));
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

    dfs(new Set(spaces), rows, columns, subboxes, board);
    return;
}
function index_to_pair(index: number): [number, number] {
    return [Math.floor(index / 9), index % 9];
}
function pair_to_index(row: number, column: number) {
    return column + 9 * row;
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
function dfs(
    spaces: Set<number>,
    rows: Record<string, boolean>[],
    columns: Record<string, boolean>[],
    subboxes: Record<string, boolean>[][],
    board: string[][]
): boolean {
    if (spaces.size === 0) {
        return true;
    }
    const spaces_and_chars: [number, number, string[]][] = [];
    for (const index of spaces) {
        const [row, column] = index_to_pair(index);
        const chars = get_available_chars(row, column, rows, columns, subboxes);
        if (chars.length === 0) {
            return false;
        }
        spaces_and_chars.push([row, column, chars] as [
            number,
            number,
            string[]
        ]);
        if (chars.length === 1) {
            break;
        }
    }
    let [i, j, chars] = spaces_and_chars[0];
    for (const [r, c, h] of spaces_and_chars) {
        if (h.length === 0) {
            return false;
        }

        if (h.length < chars.length) {
            [i, j, chars] = [r, c, h];
        }
        if (chars.length === 1) {
            break;
        }
    }
    if (chars.length === 0) {
        return false;
    }
    for (const char of chars.sort(() => Math.random() - 0.5)) {
        rows[i][char] = true;

        columns[j][char] = true;

        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char] = true;

        board[i][j] = char;
        spaces.delete(pair_to_index(i, j));
        const result = dfs(spaces, rows, columns, subboxes, board);
        if (result) {
            return result;
        }
        rows[i][char] = false;
        columns[j][char] = false;
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char] = false;
        spaces.add(pair_to_index(i, j));
    }
    return false;
}

function get_available_chars(
    row: number,
    column: number,
    rows: Record<string, boolean>[],
    columns: Record<string, boolean>[],
    subboxes: Record<string, boolean>[][]
): Array<string> {
    const array = Array.from({ length: 9 }).map((_v, i) => String(i + 1));
    const charset = new Set(array);
    const set1 = rows[row];
    const set2 = columns[column];
    const set3 = subboxes[Math.floor(row / 3)][Math.floor(column / 3)];
    for (const char of array) {
        if (set1[char] || set2[char] || set3[char]) {
            charset.delete(char);
        }
    }
    return Array.from(charset);
}
export default solveSudoku;
