import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";

interface Coordinate {
    x: number;
    y: number;
}

function matrixRankTransform(matrix: number[][]): number[][] {
    // 行数、列数、总数
    const row = matrix.length;
    const column = (matrix[0] || []).length;
    const count = row * column;
    // 二维坐标转换为一维索引
    function coordinateToIndex(coordinate: Coordinate) {
        return coordinate.x * column + coordinate.y;
    }
    // 一维索引转换为二维坐标
    function indexToCoordinate(index: number): Coordinate {
        return {
            x: Math.floor(index / column),
            y: index % column,
        };
    }
    // 数据压缩，将二维的 matrix 坐标压缩为一维索引
    // 根据一维索引对应的 matrix 元素值从小到大排序，获得一维的索引列表
    // 索引列表的第一个索引所对应的 matrix 坐标，即为 matrix 元素中最小的值，依此类推
    const sortedMatrixIndexes: number[] = new Array(count)
        .fill(0)
        .map((_, i) => i)
        .sort((a, b) => {
            const { x: ax, y: ay } = indexToCoordinate(a);
            const { x: bx, y: by } = indexToCoordinate(b);
            return matrix[ax][ay] - matrix[bx][by];
        });
    const uf = new UnionFind();
    const ranks: number[][] = new Array(row)
        .fill([])
        .map(() => new Array(column).fill(0));
    // 记录每一行最大的秩所对应的一维索引，一维索引后续可以转换为二维坐标
    const rowMax: number[] = new Array(row);
    // 记录每一列最大的秩所对应的一维索引
    const columnMax: number[] = new Array(column);

    // 从小到大遍历 matrix 元素，遍历过程中通过并查集连接所有元素，描绘元素之间的连接关系
    for (let i = 0; i < sortedMatrixIndexes.length; i++) {
        const index = sortedMatrixIndexes[i];
        const { x, y } = indexToCoordinate(index);
        // rootRank 和 newRootRank 都表示并查集中连接的一组元素其 root 元素的秩
        // 如果 root 元素的秩小于某个子元素的秩，则更新其 root 元素的秩
        let newRootRank = 1;

        // 从行的视角分析，一个 matrix 元素的最大秩可能是多少
        if (rowMax[x] !== undefined) {
            const { x: rx, y: ry } = indexToCoordinate(rowMax[x]);
            const { x: rootX, y: rootY } = indexToCoordinate(
                uf.find(rowMax[x]),
            );
            const rootRank = ranks[rootX][rootY];

            // 数值相同且行数相同，则使用并查集连接起来
            if (matrix[rx][ry] == matrix[x][y]) {
                uf.union(index, rowMax[x]);
                newRootRank = rootRank;
            } else {
                newRootRank = rootRank + 1;
            }
        }

        // 从列的视角分析，一个 matrix 元素的最大秩可能是多少
        if (columnMax[y] !== undefined) {
            const { x: cx, y: cy } = indexToCoordinate(columnMax[y]);
            const { x: rootX, y: rootY } = indexToCoordinate(
                uf.find(columnMax[y]),
            );
            const rootRank = ranks[rootX][rootY];

            // 数值相同且列数相同，则使用并查集连接起来
            if (matrix[cx][cy] === matrix[x][y]) {
                uf.union(index, columnMax[y]);
                newRootRank = Math.max(newRootRank, rootRank);
            } else {
                newRootRank = Math.max(newRootRank, rootRank + 1);
            }
        }

        // 更新 rowMax 和 columnMax 为当前的 (x, y)
        rowMax[x] = index;
        columnMax[y] = index;
        // 更新一个 matrix 元素在并查集中 root 元素的秩
        // root 元素的秩并不固定，会因为并查集中子元素的秩增加而增加
        const { x: rootX, y: rootY } = indexToCoordinate(uf.find(index));
        ranks[rootX][rootY] = newRootRank;
    }

    // 遍历 matrix 内的所有元素，可以通过并查集找到其 root 元素的秩，且 root 元素的秩固定不变
    for (let x = 0; x < row; x++) {
        for (let y = 0; y < column; y++) {
            const index = coordinateToIndex({ x, y });
            // 查找某一 matrix 元素在并查集中对应的 root 元素
            const rootIndex = uf.find(index);
            const { x: rx, y: ry } = indexToCoordinate(rootIndex);
            // 任一 matrix 元素的秩等于其 root 元素的秩
            ranks[x][y] = ranks[rx][ry];
        }
    }

    return ranks;
}

export default matrixRankTransform;
