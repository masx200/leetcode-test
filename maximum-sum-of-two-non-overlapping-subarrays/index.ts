function maxSumTwoNoOverlap(
    nums: number[],
    firstLen: number,
    secondLen: number,
): number {
    return Math.max(
        help(nums, firstLen, secondLen),
        help(nums, secondLen, firstLen),
    );
}

function help(nums: number[], firstLen: number, secondLen: number) {
    let suml = nums.slice(0, firstLen).reduce(
        (acc: number, val: number) => acc + val,
        0,
    );
    let maxSumL = suml;
    let sumr = nums.slice(firstLen, firstLen + secondLen).reduce(
        (acc: number, val: number) => acc + val,
        0,
    );
    let res = maxSumL + sumr;
    for (
        let i = firstLen + secondLen, j = firstLen;
        i < nums.length;
        i++, j++
    ) {
        suml += nums[j] - nums[j - firstLen];
        maxSumL = Math.max(maxSumL, suml);
        sumr += nums[i] - nums[i - secondLen];
        res = Math.max(res, maxSumL + sumr);
    }
    return res;
}
export default maxSumTwoNoOverlap;
