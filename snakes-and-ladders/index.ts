export default snakesAndLadders;
function snakesAndLadders(board: number[][]): number {
    const n = board.length;
    const vis = new Set<number>([1]);
    const queue = [[1, 0]];
    while (queue.length) {
        const p = queue.shift() as [number, number];
        for (let i = 1; i <= 6; ++i) {
            let nxt = p[0] + i;
            if (nxt > n * n) { // 超出边界
                break;
            }
            const rc = id2rc(nxt, n); // 得到下一步的行列
            if (board[rc[0]][rc[1]] > 0) { // 存在蛇或梯子
                nxt = board[rc[0]][rc[1]];
            }
            if (nxt === n * n) { // 到达终点
                return p[1] + 1;
            }
            if (!vis.has(nxt)) {
                vis.add(nxt);
                queue.push([nxt, p[1] + 1]); // 扩展新状态
            }
        }
    }
    return -1;
}
function id2rc(id: number, n: number) {
    const r = Math.floor((id - 1) / n);
    let c = (id - 1) % n;
    if (r % 2 === 1) {
        c = n - 1 - c;
    }
    return [n - 1 - r, c];
}
