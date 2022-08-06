function subtractProductAndSum(n: number): number {
    const nums = Array.from(String(n)).map(Number);
    const product = nums.reduce((a, v) => a * v);
    const sum = nums.reduce((a, v) => a + v);
    return product - sum;
}
export default subtractProductAndSum;
