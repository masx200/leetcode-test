import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";

function latestDayToCross(row: number, col: number, cells: number[][]): number {
    const n = row * col + 2; // 添加额外两个节点，一个用来连接第一层，一个连接最下面的一层，每加一个点，只要检查这两个点有没有连通就可以知道是否能从最上面走到最下面了
    const uf = new UnionFind();
    const arr: number[][] = new Array(row)
        .fill(0)
        .map(() => new Array(col).fill(0));
    for (let i = n - 3; i >= 0; i--) {
        let [x, y] = cells[i];
        x--;
        y--;
        arr[x][y] = 1;
        const index = x * col + y;
        if (x - 1 >= 0 && arr[x - 1][y]) uf.union(index, index - col);
        if (x + 1 < row && arr[x + 1][y]) uf.union(index, index + col);
        if (y - 1 >= 0 && arr[x][y - 1]) uf.union(index, index - 1);
        if (y + 1 < col && arr[x][y + 1]) uf.union(index, index + 1);
        if (x === 0) uf.union(index, n - 1); // 把第一层的节点与n-1连通
        if (x === row - 1) uf.union(index, n); // 把最下面一层的节点与n连通
        if (uf.connected(n, n - 1)) return i; // 检查第一层跟最后一层有没有连通
    }
    return 0;
}
export default latestDayToCross;
