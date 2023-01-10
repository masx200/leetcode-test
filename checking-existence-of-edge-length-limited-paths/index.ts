import { UnionFind } from "../largest-component-size-by-common-factor/UnionFind.ts";

function distanceLimitedPathsExist(
    _n: number,
    edgeList: number[][],
    queries: number[][],
): boolean[] {
    const uf = new UnionFind();

    const qid = [...queries.keys()];
    qid.sort((i, j) => queries[i][2] - queries[j][2]);

    edgeList.sort((a, b) => a[2] - b[2]);

    const ans: boolean[] = Array(queries.length).fill(false);
    let i = 0;
    for (const query of qid) {
        while (i < edgeList.length && edgeList[i][2] < queries[query][2]) {
            uf.union(edgeList[i][0], edgeList[i][1]);
            i++;
        }
        ans[query] = uf.connected(queries[query][0], queries[query][1]);
    }
    return ans;
}
export default distanceLimitedPathsExist;
