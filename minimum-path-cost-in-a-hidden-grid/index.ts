import { Heap } from "https://esm.sh/@datastructures-js/heap@4.2.2/src/heap.js";

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
            end[0] = row;
            end[1] = col;
        }

        for (const [a, b, x, y] of directions) {
            const nr = row + a;
            const nc = col + b;
            const str = JSON.stringify([nr, nc]);
            if (!visited.has(str) && master.canMove(x)) {
                visited.add(str);
                const cost = master.move(x);
                grid.set(str, cost);
                dfs(nr, nc, visited);
                grid.set(key, master.move(y));
            }
        }
    }

    if (end.length === 0) return -1;
    function bfs(pos: [number, number][], visited: Set<string>): number {
        const pq = new Heap<[number, number, number]>((a, b) => a[2] - b[2]);
        pos.forEach(([r, c]) => pq.push([r, c, 0]));
        while (!pq.isEmpty()) {
            const [row, col, distance] = pq.pop();

            if (row === end[0] && col === end[1]) {
                return distance;
            }
            for (const [a, b] of directions) {
                const nr = row + a;
                const nc = col + b;
                const str = JSON.stringify([nr, nc]);
                const cost = grid.get(str);
                if (!visited.has(str) && cost) {
                    visited.add(str);
                    pq.push([nr, nc, cost + distance]);
                }
            }
        }
        return -1;
    }
    const distance = bfs([[0, 0]], new Set<string>().add(key));

    return distance;
}
const directions = [
    [0, -1, "L", "R"],
    [0, 1, "R", "L"],
    [-1, 0, "U", "D"],
    [1, 0, "D", "U"],
] as const;
