export default function minimumScore(
    nums: number[],
    edges: number[][],
): number {
    const n = nums.length;
    if (nums.length === 0) return 0;
    const edgeMap = new Array<Array<number>>(nums.length).fill([]).map(() =>
        [] as Array<number>
    );

    for (const [a, b] of edges) {
        addEdge(edgeMap, a, b);
        addEdge(edgeMap, b, a);
    }
    const children = new Array<Array<number>>(nums.length).fill([]).map(() =>
        [] as Array<number>
    );

    const parent = new Array<number | null>(nums.length).fill(null);
    const visited = new Set<number>();
    const xor = new Array<number>(nums.length).fill(0);
    const ancestor = new Array(n).fill(0).map(() =>
        new Array<boolean>(n).fill(false)
    );

    const root = 0;
    bfs([root], visited, edgeMap, children, parent, xor, nums);

    for (let i = 1; i < n; i++) {
        let j = parent[i];

        while (typeof j === "number") {
            ancestor[j][i] = true;

            j = parent[j];
        }
    }

    let ans = Infinity;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let a: number, b: number, c: number;
            if (ancestor[i][j]) {
                a = xor[0] ^ xor[i];
                b = xor[i] ^ xor[j];
                c = xor[j];
            } else if (ancestor[j][i]) {
                a = xor[0] ^ xor[j];
                b = xor[j] ^ xor[i];
                c = xor[i];
            } else {
                a = xor[0] ^ xor[i] ^ xor[j];
                b = xor[i];
                c = xor[j];
            }
            ans = Math.min(ans, Math.max(a, b, c) - Math.min(a, b, c));
        }
    }

    return ans;
}

function bfs(
    nodes: number[],
    visited: Set<number>,
    edgeMap: number[][],
    children: number[][],
    parent: (number | null)[],
    xor: number[],
    nums: number[],
) {
    if (nodes.length === 0) return;
    const temp: number[] = [];
    for (const node of nodes) {
        if (!visited.has(node)) {
            visited.add(node);
        }
        const childs = edgeMap[node];
        if (childs.length) {
            for (const child of childs) {
                if (!visited.has(child) && parent[child] !== node) {
                    visited.add(child);

                    addEdge(children, node, child);
                    parent[child] = node;
                    temp.push(child);
                }
            }
        }
    }
    bfs(temp, visited, edgeMap, children, parent, xor, nums);
    for (const node of nodes) {
        xor[node] = nums[node] ^ children[node].reduce((a, v) => a ^ xor[v], 0);
    }
}

function addEdge(edgemap: number[][], a: number, b: number) {
    const arr = edgemap[a] ?? [];
    arr.push(b);
    edgemap[a] = arr;
}
