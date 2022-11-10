export default function shortestPathAllKeys(g: string[]): number {
    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];
    const n = g.length,
        m = g[0].length;
    let cnt = 0;
    const dist = new Array<Array<Array<number>>>();
    for (let i = 0; i < n; i++) {
        dist[i] = new Array<Array<number>>(m);
        for (let j = 0; j < m; j++) {
            dist[i][j] = new Array<number>(1 << 10).fill(Infinity);
        }
    }
    const d: number[][] = [];
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (g[i][j] == "@") {
                d.push([i, j, 0]);
                dist[i][j][0] = 0;
            } else if (g[i][j] >= "a" && g[i][j] <= "z") cnt++;
        }
    }
    while (d.length > 0) {
        const info = d.shift() as [number, number, number];
        const x = info[0],
            y = info[1],
            cur = info[2],
            step = dist[x][y][cur];
        for (const di of dirs) {
            const nx = x + di[0],
                ny = y + di[1];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            const c = g[nx][ny];
            if (c == "#") continue;
            if (
                "A" <= c &&
                c <= "Z" &&
                ((cur >> (c.charCodeAt(0) - "A".charCodeAt(0))) & 1) == 0
            ) {
                continue;
            }
            let ncur = cur;
            if ("a" <= c && c <= "z") {
                ncur |= 1 << (c.charCodeAt(0) - "a".charCodeAt(0));
            }
            if (ncur == (1 << cnt) - 1) return step + 1;
            if (step + 1 >= dist[nx][ny][ncur]) continue;
            d.push([nx, ny, ncur]);
            dist[nx][ny][ncur] = step + 1;
        }
    }
    return -1;
}
