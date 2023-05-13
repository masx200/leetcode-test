import { BinaryHeap } from "https://deno.land/std@0.187.0/collections/binary_heap.ts";

function minimumEffortPath(heights: number[][]): number {
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1],
    ];

    const m = heights.length;
    const n = heights[0].length;
    const pq = new BinaryHeap<[number, number, number]>(
        (edge1, edge2) => edge1[2] - edge2[2],
    );
    pq.push([0, 0, 0]);

    const dist = new Array<number>(m * n);
    dist.fill(Infinity);
    dist[0] = 0;
    const seen = new Array<boolean>(m * n);

    while (!pq.isEmpty()) {
        const edge = pq.pop() as [number, number, number];
        const x = edge[0],
            y = edge[1],
            d = edge[2];
        const id = x * n + y;
        if (seen[id]) {
            continue;
        }
        if (x == m - 1 && y == n - 1) {
            break;
        }
        seen[id] = true;
        for (let i = 0; i < 4; ++i) {
            const nx = x + dirs[i][0];
            const ny = y + dirs[i][1];
            if (
                nx >= 0 &&
                nx < m &&
                ny >= 0 &&
                ny < n &&
                Math.max(d, Math.abs(heights[x][y] - heights[nx][ny])) <
                    dist[nx * n + ny]
            ) {
                dist[nx * n + ny] = Math.max(
                    d,
                    Math.abs(heights[x][y] - heights[nx][ny]),
                );
                pq.push([nx, ny, dist[nx * n + ny]]);
            }
        }
    }

    return dist[m * n - 1];
}
export default minimumEffortPath;
