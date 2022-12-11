import { uniqBy } from "../deps.ts";

export default function permuteUnique(nums: number[]): number[][] {
    if (nums.length == 0) {
        return [];
    }
    if (nums.length == 1) {
        return [nums];
    }

    const result: number[][] = [];

    permute_index(nums, (numsres: number[]) => {
        result.push(numsres);
    });
    return uniqBy(result, (a: number[]) => Array.prototype.join.call(a, ","));
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

        for (
            const res of uniqBy(
                arrays,
                (a: number[]) => Array.prototype.join.call(a, ","),
            )
        ) {
            output(res);
        }
    });
}
