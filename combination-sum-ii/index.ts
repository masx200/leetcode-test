export default function combinationSum2(
    candidates: number[],
    target: number
): number[][] {
    candidates.sort((a, b) => -b + a);
    const ans: number[][] = [];

    const non_repeat = new Set<string>();
    dfs(candidates, target, [], function (path: number[]) {
        const str = path.join(",");

        if (non_repeat.has(str)) {
            return;
        }
        non_repeat.add(str);
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
    // console.log(candidates, target, path);
    if (target === 0) {
        output(path);
        return;
    }

    for (const [index, can] of candidates.entries()) {
        if (target >= can) {
            dfs(
                candidates.slice(index + 1),
                target - can,
                [...path, can],
                output
            );
        } else {
            return;
        }
    }
}
