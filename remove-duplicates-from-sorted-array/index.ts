export default function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    let current = nums[0];
    let count = 1;
    const should_delete: number[] = [];
    for (const [i, n] of nums.entries()) {
        if (i === 0) continue;
        // console.log({current,n,count})
        if (n === current) {
            should_delete.push(i);
        } else {
            current = n;
            count++;
        }
    }
    should_delete.forEach((i) => nums[i] = Infinity);
    // nums.sort((a, b) => a - b)
    const temp = nums.filter((a) => a < Infinity);
    // Reflect.ownKeys(temp).forEach(ke)
    temp.forEach((v, i) => nums[i] = v);
    // const temp = nums.filter(a => a > -Infinity)
    // nums.length = 0
    // temp.forEach(v => nums.push(v))
    return count;
}
