import { GridMaster } from "./GridMaster.ts";

export default function findShortestPath(master: GridMaster): number {
    const key = JSON.stringify([0, 0]);
    const grid: Map<string, number> = new Map();

    const end: number[] = [];
    grid.set(key, -1);
    dfs(0, 0, new Set<string>().add(key));
    function dfs(row: number, col: number, visited: Set<string>) {
        const key = JSON.stringify([row, col]);
        if (master.isTarget()) {
            grid.set(key, 2);
            end[0] = row;
            end[1] = col;
        } else {
            grid.set(key, 1);
        }

        for (const [a, b, x, y] of directions) {
            const nr = row + a;
            const nc = col + b;
            const str = JSON.stringify([nr, nc]);
            if (!visited.has(str) && master.canMove(x)) {
                visited.add(str);
                master.move(x);
                dfs(nr, nc, visited);
                master.move(y);
            }
        }
    }

    if (end.length === 0) return -1;
    function bfs(
        pos: [number, number][],
        distance: number,
        visited: Set<string>,
    ): number {
        const temp: [number, number][] = [];
        for (const [row, col] of pos) {
            const key = JSON.stringify([row, col]);
            if (grid.get(key) === 2) {
                return distance;
            }
            for (const [a, b] of directions) {
                const nr = row + a;
                const nc = col + b;
                const str = JSON.stringify([nr, nc]);
                if (!visited.has(str) && grid.get(str) !== 0) {
                    visited.add(str);
                    temp.push([nr, nc]);
                }
            }
        }
        if (temp.length) return bfs(temp, distance + 1, visited);
        return -1;
    }
    const distance = bfs([[0, 0]], 0, new Set<string>().add(key));

    return distance;
}
const directions = [
    [0, -1, "L", "R"],
    [0, 1, "R", "L"],
    [-1, 0, "U", "D"],
    [1, 0, "D", "U"],
] as const;
