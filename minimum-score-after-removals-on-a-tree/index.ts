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
        edgeMap[a].push(b);
        edgeMap[b].push(a);
    }
    const children = new Array<Array<number>>(nums.length).fill([]).map(() =>
        [] as Array<number>
    );

    const visited = new Set<number>();
    const xor = new Array<number>(nums.length).fill(0);
    const ancestorToGrandson = new Array(n).fill(0).map(() =>
        new Array<boolean>(n).fill(false)
    );

    const root = 0;
    bfs([root], visited, edgeMap, children, ancestorToGrandson, xor, nums);

    let ans = Infinity;
    for (let i = 1; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let a: number, b: number, c: number;
            if (ancestorToGrandson[i][j]) {
                a = xor[0] ^ xor[i];
                b = xor[i] ^ xor[j];
                c = xor[j];
            } else if (ancestorToGrandson[j][i]) {
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
    ancestorToGrandson: boolean[][],
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
                if (!visited.has(child) && !ancestorToGrandson[node][child]) {
                    visited.add(child);
                    children[node].push(child);
                    for (let i = 0; i < nums.length; i++) {
                        ancestorToGrandson[i][child] =
                            ancestorToGrandson[i][node];
                    }
                    ancestorToGrandson[node][child] = true;

                    temp.push(child);
                }
            }
        }
    }
    bfs(temp, visited, edgeMap, children, ancestorToGrandson, xor, nums);
    for (const node of nodes) {
        xor[node] = nums[node] ^ children[node].reduce((a, v) => a ^ xor[v], 0);
    }
}
