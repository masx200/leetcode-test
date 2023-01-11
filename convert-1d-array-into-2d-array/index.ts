function construct2DArray(
    original: number[],
    m: number,
    n: number
): number[][] {
    return original.length === m * n
        ? Array(m)
              .fill(0)
              .map((_, i) => original.slice(i * n, i * n + n))
        : [];
}
export default construct2DArray;
