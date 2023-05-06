import Node from "./Node.ts";

export default function construct(grid: number[][]): Node | null {
    return dfs(grid, 0, 0, grid.length, grid.length);
}

function dfs(
    grid: number[][],
    r0: number,
    c0: number,
    r1: number,
    c1: number,
): Node | null {
    let same = true;
    for (let i = r0; i < r1; ++i) {
        for (let j = c0; j < c1; ++j) {
            if (grid[i][j] !== grid[r0][c0]) {
                same = false;
                break;
            }
        }
        if (!same) {
            break;
        }
    }

    if (same) {
        return new Node(grid[r0][c0] === 1, true);
    }

    const ret = new Node(
        true,
        false,
        dfs(grid, r0, c0, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2)),
        dfs(grid, r0, Math.floor((c0 + c1) / 2), Math.floor((r0 + r1) / 2), c1),
        dfs(grid, Math.floor((r0 + r1) / 2), c0, r1, Math.floor((c0 + c1) / 2)),
        dfs(grid, Math.floor((r0 + r1) / 2), Math.floor((c0 + c1) / 2), r1, c1),
    );
    return ret;
}
