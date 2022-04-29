// const isEqual = _.isEqual;

import { uniqBy } from "../deps.ts";

// const uniqBy = _.uniqBy;
export default function permuteUnique(nums: number[]): number[][] {
    if (nums.length == 0) {
        return [];
    }
    if (nums.length == 1) {
        return [nums];
    }

    // const visited = new Set<string>();
    const result: number[][] = [];

    permute_index(nums, (numsres: number[]) => {
        // const numsres = indexs.map((v) => nums[v]);
        // const numsres = indexs;
        // const key = numsres.join(",");
        // if (visited.has(key)) {
        //     return;
        // } else {
        //     visited.add(key);
        result.push(numsres);
        // }
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
    // if (k === 2) {
    //     // output([0, 1].map((v) => nums[v]));
    //     // output([1, 0].map((v) => nums[v]));
    //     const arrays: number[][] = uniqBy(
    //         [
    //             [1, 0],
    //             [0, 1],
    //         ].map((a) => a.map((v) => nums[v])),
    //         isEqual
    //     );
    //     console.log(arrays)
    //     for (const res of arrays) {
    //         output(res);
    //     }
    //     return;
    // }

    permute_index(nums.slice(0, -1), (indexs) => {
        const arrays: number[][] = [];
        for (let i = 0; i < indexs.length + 1; i++) {
            const b = Array.from(indexs);
            b.splice(i, 0, nums.slice(-1)[0]);
            arrays.push(b);
            // output(b);
        }
        // console.log(arrays);
        for (
            const res of uniqBy(
                arrays,
                (a: number[]) => Array.prototype.join.call(a, ","),
            )
        ) {
            // console.log(res);
            output(res);
        }
    });
}
