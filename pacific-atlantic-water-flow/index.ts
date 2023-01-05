import { intersection } from "../deps.ts";

export default function pacificAtlantic(heights: number[][]): number[][] {
    const m = heights.length;
    const n = heights[0]?.length;
    if (!m || !n) {
        return [];
    }
    const pacific = new Set<`${number},${number}`>();
    const atlantic = new Set<`${number},${number}`>();
    for (let i = 0; i < m; i++) {
        //左边界
        dfs(i, 0, m, n, pacific, heights);
    }
    for (let j = 1; j < n; j++) {
        //上边界
        dfs(0, j, m, n, pacific, heights);
    }
    for (let i = 0; i < m; i++) {
        //右边界
        dfs(i, n - 1, m, n, atlantic, heights);
    }
    for (let j = 0; j < n - 1; j++) {
        //下边界
        dfs(m - 1, j, m, n, atlantic, heights);
    }

    const result: number[][] = intersection([...pacific], [...atlantic]).map(
        (pos) => {
            const [x, y] = pos.split(",");
            return [Number(x), Number(y)];
        }
    );

    return result;
}

function dfs(
    row: number,
    col: number,
    m: number,
    n: number,
    pacific: Set<`${number},${number}`>,
    heights: number[][]
) {
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];
    const key: `${number},${number}` = `${row},${col}`;
    if (pacific.has(key)) {
        return;
    }
    pacific.add(key);

    for (const dir of dirs) {
        const newRow = row + dir[0],
            newCol = col + dir[1];
        if (
            newRow >= 0 &&
            newRow < m &&
            newCol >= 0 &&
            newCol < n &&
            heights[newRow][newCol] >= heights[row][col]
        ) {
            dfs(newRow, newCol, m, n, pacific, heights);
        }
    }
}
