/*
 * @lc app=leetcode.cn id=36 lang=typescript
 *
 * [36] 有效的数独
 */

// @lc code=start
export default function isValidSudoku(board: string[][]): boolean {
    const rows = new Array(9).fill(0).map(() => new Set<string>());
    const columns = new Array(9).fill(0).map(() => new Set<string>());
    const subboxes = new Array(3)
        .fill(0)
        .map(() => new Array(3).fill(0).map(() => new Set<string>()));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[i][j];
            if (c !== ".") {
                if (
                    rows[i].has(c) ||
                    columns[j].has(c) ||
                    subboxes[Math.floor(i / 3)][Math.floor(j / 3)].has(c)
                ) {
                    return false;
                }
                rows[i].add(c);
                columns[j].add(c);
                subboxes[Math.floor(i / 3)][Math.floor(j / 3)].add(c);
            }
        }
    }
    return true;
}
// @lc code=end
