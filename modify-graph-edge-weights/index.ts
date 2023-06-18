function modifiedGraphEdges(
    n: number,
    edges: number[][],
    source: number,
    destination: number,
    target: number,
): number[][] {
    let fromDestination: number[] = [];
    const adjMatrix: number[][] = new Array(n).fill(0).map(() =>
        new Array(n).fill(-1)
    );
    // 邻接矩阵中存储边的下标
    for (let i = 0; i < edges.length; ++i) {
        const u = edges[i][0], v = edges[i][1];
        adjMatrix[u][v] = adjMatrix[v][u] = i;
    }
    fromDestination = dijkstra(
        0,
        destination,
        edges,
        adjMatrix,
        target,
        fromDestination,
    );
    if (fromDestination[source] > target) {
        return [];
    }
    const fromSource = dijkstra(
        1,
        source,
        edges,
        adjMatrix,
        target,
        fromDestination,
    );
    if (fromSource[destination] !== target) {
        return [];
    }
    return edges;
}

function dijkstra(
    op: number,
    source: number,
    edges: number[][],
    adjMatrix: number[][],
    target: number,
    fromDestination: number[],
) {
    // 朴素的 dijkstra 算法
    // adjMatrix 是一个邻接矩阵
    const n = adjMatrix.length;
    const dist = new Array(n).fill(Number.MAX_SAFE_INTEGER);
    const used = new Array(n).fill(false);
    dist[source] = 0;

    for (let round = 0; round < n - 1; ++round) {
        let u = -1;
        for (let i = 0; i < n; ++i) {
            if (!used[i] && (u === -1 || dist[i] < dist[u])) {
                u = i;
            }
        }
        used[u] = true;
        for (let v = 0; v < n; ++v) {
            if (!used[v] && adjMatrix[u][v] !== -1) {
                if (edges[adjMatrix[u][v]][2] !== -1) {
                    dist[v] = Math.min(
                        dist[v],
                        dist[u] + edges[adjMatrix[u][v]][2],
                    );
                } else {
                    if (op == 0) {
                        dist[v] = Math.min(dist[v], dist[u] + 1);
                    } else {
                        const modify = target - dist[u] - fromDestination[v];
                        if (modify > 0) {
                            dist[v] = Math.min(dist[v], dist[u] + modify);
                            edges[adjMatrix[u][v]][2] = modify;
                        } else {
                            edges[adjMatrix[u][v]][2] = target;
                        }
                    }
                }
            }
        }
    }

    return dist;
}
export default modifiedGraphEdges;
