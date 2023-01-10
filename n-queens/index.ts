export default function solveNQueens(n: number): string[][] {
    if (n === 1) return [["Q"]];
    if (n === 2 || n === 3) return [];
    const solutions: string[][] = [];

    permute_index(
        Array.from({ length: n }).map((_v, i) => i),
        (indexs: number[]) => {
            if (check_that_the_slashes_are_conflicting(indexs)) {
                return;
            }
            const s = indexs.map((v) => {
                const line: string[] = [];
                line.length = n;
                line.fill(".");
                line[v] = "Q";
                return line.join("");
            });
            solutions.push(s);
        },
    );
    return solutions;
}
function check_that_the_slashes_are_conflicting(indexs: number[]): boolean {
    const diagonals1 = new Set<number>();
    const diagonals2 = new Set<number>();
    for (const [row, column] of indexs.entries()) {
        const diagonal1 = row - column;
        if (diagonals1.has(diagonal1)) {
            return true;
        }
        const diagonal2 = row + column;
        if (diagonals2.has(diagonal2)) {
            return true;
        }
        diagonals1.add(diagonal1);
        diagonals2.add(diagonal2);
    }
    return false;
}
function permute_index(nums: number[], output: (indexs: number[]) => void) {
    const k = nums.length;
    if (k === 0) {
        return;
    }
    if (k === 1) {
        output([0].map((v) => nums[v]));
        return;
    }

    permute_index(nums.slice(0, -1), (indexs) => {
        const arrays: number[][] = [];
        for (let i = 0; i < indexs.length + 1; i++) {
            const b = Array.from(indexs);
            b.splice(i, 0, nums.slice(-1)[0]);
            arrays.push(b);
        }

        for (const res of arrays) {
            output(res);
        }
    });
}
