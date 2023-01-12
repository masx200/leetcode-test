function integerReplacement(n: number): number {
    return n === 1
        ? 0
        : n % 2 === 0
        ? Math.log2(n) % 1 === 0 ? Math.log2(n) : integerReplacement(n / 2) + 1
        : Math.min(integerReplacement(n + 1), integerReplacement(n - 1)) + 1;
}
export default integerReplacement;
