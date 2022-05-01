// import { default as cloneDeep } from "https://cdn.skypack.dev/lodash@4.17.21/cloneDeep?dts";
function solveSudoku(board: string[][]): void {
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
    // const sorted: [number, number, Array<string>][] = spaces
    //     .map(
    //         ([row, column]) =>
    //             [row, column, get_available_chars(row, column)] as [
    //                 number,
    //                 number,
    //                 Array<string>
    //             ]
    //     )
    //     .sort((a, b) => -a[2].length + b[2].length);
    // spaces.length = 0;
    // for (const [row, column] of sorted) {
    //   spaces.push([row, column]);
    // }

    /*  const result = */
    dfs(spaces, rows, columns, subboxes, board);
    // if (result) {
    //     for (const [row, column, char] of result) {
    //         board[row][column] = char;
    //     }
    // }
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
function dfs(
    spaces: [number, number][],
    rows: Record<string, boolean>[],
    columns: Record<string, boolean>[],
    subboxes: Record<string, boolean>[][],
    board: string[][]
): boolean {
    if (spaces.length === 0) {
        return true;
    }
    const spaces_and_chars = spaces.map(
        ([row, column]) =>
            [
                row,
                column,
                get_available_chars(row, column, rows, columns, subboxes),
            ] as [number, number, string[]]
    );
    let [i, j, chars] = spaces_and_chars[0];
    //查找可选数最少的空格
    for (const [r, c, h] of spaces_and_chars) {
        if (h.length === 0) {
            return false;
        }
        if (h.length < chars.length) {
            [i, j, chars] = [r, c, h];
        }
    }
    if (chars.length === 0) {
        return false;
    }
    const clonedspaces = spaces.filter(([r, c]) => !(r == i && c == j));

    // if (pos < 0) {
    //     return true;
    // }
    // const [i, j, chars] = sorted[pos];
    // const chars =

    // Array.from({ length: 9 })
    //.map((_v, i) => String(i + 1))
    // .sort(() => Math.random() - 0.5);
    for (const char of chars.sort(() => Math.random() - 0.5)) {
        // const clonedrows = cloneDeep(rows);
        // const clonedcolumns = cloneDeep(columns);
        // const clonedsubboxes = cloneDeep(subboxes);
        // if (
        //     !rows[i][char] &&
        //     !columns[j][char] &&
        //     !subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char]
        // ) {
        /*     cloned */
        rows[i][char] = true;
        /* cloned */
        columns[j][char] = true;
        /*   cloned */
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char] = true;

        board[i][j] = char;
        const result = dfs(
            clonedspaces,
            /* cloned */
            rows,
            /*  cloned */
            columns,
            /*   cloned */
            subboxes,
            board
        );
        if (result) {
            return result;
        }
        rows[i][char] = false;
        columns[j][char] = false;
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char] = false;
        // }
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
export default solveSudoku;
// export default function solveSudoku(board: string[][]): void {
//     const spaces: [number, number][] = [];

//     const rows = new Array(9).fill(0).map(() => number_char_set(false));
//     const columns = new Array(9).fill(0).map(() => number_char_set(false));
//     const subboxes = new Array(3)
//         .fill(0)
//         .map(() => new Array(3).fill(0).map(() => number_char_set(false)));
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             const char = board[i][j];
//             if (char === ".") {
//                 // if (Math.random() - 0.5 > 0) {
//                 spaces.push([i, j]);
//                 // } else {
//                 //   spaces.unshift([i, j]);
//                 // }
//             } else {
//                 rows[i][char] = true;
//                 columns[j][char] = true;
//                 subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char] = true;
//             }
//         }
//     }
//     if (spaces.length === 0) {
//         return;
//     }
//     const sorted: [number, number, Array<string>][] = spaces
//         .map(
//             ([row, column]) =>
//                 [row, column, get_available_chars(row, column)] as [
//                     number,
//                     number,
//                     Array<string>,
//                 ],
//         )
//         .sort((a, b) => -a[2].length + b[2].length);
//     // spaces.length = 0;
//     // for (const [row, column] of sorted) {
//     //   spaces.push([row, column]);
//     // }

//     function get_available_chars(row: number, column: number): Array<string> {
//         const array = Array.from({ length: 9 }).map((_v, i) => String(i + 1));
//         const charset = new Set(array);
//         for (const char of array) {
//             if (
//                 rows[row][char] ||
//                 columns[column][char] ||
//                 subboxes[Math.floor(row / 3)][Math.floor(column / 3)][char]
//             ) {
//                 charset.delete(char);
//             }
//         }
//         return Array.from(charset);
//     }
//     function dfs(pos: number): boolean {
//         if (pos < 0) {
//             return true;
//         }
//         const [i, j, chars] = sorted[pos];
//         // const chars =

//         // Array.from({ length: 9 })
//         //.map((_v, i) => String(i + 1))
//         // .sort(() => Math.random() - 0.5);
//         for (const char of chars.sort(() => Math.random() - 0.5)) {
//             if (
//                 !rows[i][char] &&
//                 !columns[j][char] &&
//                 !subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char]
//             ) {
//                 rows[i][char] = true;
//                 columns[j][char] = true;
//                 subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char] = true;

//                 board[i][j] = char;
//                 if (dfs(pos - 1)) {
//                     return true;
//                 }
//                 rows[i][char] = false;
//                 columns[j][char] = false;
//                 subboxes[Math.floor(i / 3)][Math.floor(j / 3)][char] = false;
//             }
//         }
//         return false;
//     }

//     dfs(spaces.length - 1);
//     return;
// }
// function number_char_set(def: boolean): Record<string, boolean> {
//     return {
//         1: def,
//         2: def,
//         3: def,
//         4: def,
//         5: def,
//         6: def,
//         7: def,
//         8: def,
//         9: def,
//     };
// }
