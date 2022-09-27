import { greatestCommonDivisor } from "../max-points-on-a-line/greatest_common_divisor.ts";

export default getCoprimes;
function getCoprimes(nums: number[], edges: number[][]): number[] {
    const edge = Array(nums.length)
        .fill(0)
        .map(() => Array<number>());
    for (const [a, b] of edges) {
        edge[a].push(b);
        edge[b].push(a);
    }

    if (prime.length === 0) {
        for (const i of Array(51).keys()) {
            prime[i] = Array(51).fill(false);
        }

        for (const i of Array(51).keys()) {
            for (let j = i; j < 51; j++) {
                prime[i][j] = prime[j][i] = greatestCommonDivisor(i, j) === 1;
            }
        }
    }
    const set = new Set(nums);
    const visited = new Set<number>();
    const currents: [number, number][][] = Array(51)
        .fill(0)
        .map(() => []);
    function dfs(node: number, depth: number) {
        if (visited.has(node)) {
            return;
        }
        visited.add(node);
        const value = nums[node];

        let ans = [-1, -1];
        for (const i of set) {
            if (currents[i].length && prime[value][i]) {
                const get = currents[i].at(-1) as [number, number];

                if (get[1] > ans[1]) {
                    ans = get;
                }
            }
        }
        results[node] = ans[0];
        for (const child of edge[node]) {
            currents[value].push([node, depth]);
            dfs(child, depth + 1);
            currents[value].pop();
        }
    }
    const results: number[] = Array(nums.length).fill(-1);
    dfs(0, 0);
    return results;
}

const prime: boolean[][] = [];
