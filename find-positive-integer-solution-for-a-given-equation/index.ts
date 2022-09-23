import { CustomFunction } from "./CustomFunction.ts";

function findSolution(customfunction: CustomFunction, z: number): number[][] {
    const min = customfunction.f(1, 1);
    const max = customfunction.f(1000, 1000);
    if (z < min || z > max) return [];

    const res: number[][] = [];
    for (let i = 1, j = 1000; i <= 1000 && j >= 1;) {
        const diff = customfunction.f(i, j) - z;
        if (diff === 0) {
            res.push([i, j]);
            i++;
            j--;
        } else if (diff < 0) {
            i++;
        } else {
            j--;
        }
    }
    return res;
}
export default findSolution;
