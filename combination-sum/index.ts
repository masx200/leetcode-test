export default function combinationSum(
    candidates: number[],
    target: number
): number[][] {
    candidates.sort((a, b) => -b + a);
    const ans: number[][] = [];
    dfs(candidates, target, [], (path: number[]) => ans.push(path));
    return ans;
}

function dfs(
    candidates: number[],
    target: number,
    path: number[],
    output: (path: number[]) => number
) {
    if (target === 0) {
        output(path);
        return;
    }

    for (const [index, can] of candidates.entries()) {
        if (target >= can) {
            dfs(
                index ? candidates.slice(index) : candidates,
                target - can,
                [...path, can],
                output
            );
        } else {
            return;
        }
    }
}
