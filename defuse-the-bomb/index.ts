function decrypt(code: number[], k: number): number[] {
    if (k === 0) return Array.from(code).fill(0);
    if (k < 0) return decrypt(code.reverse(), -k).reverse();
    const nums = [...code, ...code];
    const presum: number[] = Array(nums.length + 1).fill(0);
    nums.forEach((value, index) => {
        presum[index + 1] = value + (presum[index]);
    });
    return code.map((_, i) => presum[i + k + 1] - presum[i + 1]);
}
export default decrypt;
