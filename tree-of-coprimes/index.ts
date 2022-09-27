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

        for (const i of Array(51).keys())
            for (let j = i; j < 51; j++) {
                prime[i][j] = prime[j][i] = greatestCommonDivisor(i, j) === 1;
            }
    }

    const visited = new Set<number>();
    function dfs(node: number, ancestors: number[]) {
        if (!visited.has(node)) {
            visited.add(node);

            if (ancestors.length) {
                for (let i = ancestors.length - 1; i >= 0; i--) {
                    if (prime[nums[node]][nums[ancestors[i]]]) {
                        results[node] = ancestors[i];
                        break;
                    }
                }
            }
            for (const child of edge[node]) {
                ancestors.push(node);
                dfs(child, ancestors);
                ancestors.pop();
            }
        }
    }
    const results: number[] = Array(nums.length).fill(-1);
    dfs(0, []);
    return results;
}

const prime: boolean[][] = [];

function greatestCommonDivisor(a: number, b: number): number {
    return b != 0 ? greatestCommonDivisor(b, a % b) : a;
}
