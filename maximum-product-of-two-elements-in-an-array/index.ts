export default function maxProduct(nums: number[]): number {
    const max_pair = nums.reduce(
        (a, v, i): [number, number] => (v > a[1] ? [i, v] : a),
        [0, nums[0]] as [number, number]
    );

    nums.splice(max_pair[0], 1);
    const sec_max_pair = nums.reduce(
        (a, v, i): [number, number] => (v > a[1] ? [i, v] : a),
        [0, nums[0]] as [number, number]
    );

    return (sec_max_pair[1] - 1) * (max_pair[1] - 1);
}
