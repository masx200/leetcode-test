export default function combinationSum2(
    candidates: number[],
    target: number
): number[][] {
    candidates.sort((a, b) => -b + a);
    const ans: number[][] = [];

    dfs(candidates, target, [], function (path: number[]) {
        return ans.push(path);
    });
    return ans;
}

function dfs(
    candidates: number[],
    target: number,
    path: number[],
    output: (path: number[]) => void
) {
    if (target === 0) {
        output(path);
        return;
    }

    for (const [index, can] of candidates.entries()) {
        if (target >= can) {
            if (
                !(
                    candidates[index - 1] &&
                    candidates[index] === candidates[index - 1]
                )
            ) {
                dfs(
                    candidates.slice(index + 1),
                    target - can,
                    [...path, can],
                    output
                );
            }
        } else {
            return;
        }
    }
}
