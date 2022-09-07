export default minimumMoves;
function minimumMoves(grid: number[][]): number {
    return bfs(grid, new Set(), [[0, 0, 0, 1]], 0);
}

function bfs(
    grid: number[][],
    visited: Set<string>,
    positions: [x: number, y: number, x: number, y: number][],
    step: number,
): number {
    const n = grid.length;
    if (positions.length === 0) return -1;
    const temp: typeof positions = [];
    for (const position of positions) {
        const [q, w, e, r] = position;
        if (isEnd(position, grid.length)) return step;
        const key = hash(position);
        if (!visited.has(key)) {
            visited.add(key);

            if (
                w + 1 < n &&
                r + 1 < n &&
                grid[q][w + 1] === 0 &&
                grid[e][r + 1] === 0
            ) {
                temp.push([q, w + 1, e, r + 1]);
                if (position[1] === position[3]) {
                    if (e - 1 >= 0) temp.push([q, w, e - 1, r + 1]);
                }
            }
            if (
                q + 1 < n &&
                e + 1 < n &&
                grid[q + 1][w] === 0 &&
                grid[e + 1][r] === 0
            ) {
                temp.push([q + 1, w, e + 1, r]);
                if (position[0] === position[2]) {
                    if (r - 1 >= 0) temp.push([q, w, e + 1, r - 1]);
                }
            }
        }
    }
    return bfs(grid, visited, temp, step + 1);
}
function hash(position: [x: number, y: number, x: number, y: number]): string {
    return JSON.stringify(position);
}
function isEnd(
    position: [x: number, y: number, x: number, y: number],
    n: number,
): boolean {
    return (
        position[0] === n - 1 &&
        position[1] === n - 2 &&
        position[2] === n - 1 &&
        position[3] === n - 1
    );
}
