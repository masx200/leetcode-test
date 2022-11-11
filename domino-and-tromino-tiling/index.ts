function numTilings(n: number): number {
    if (typeof cache[n] !== "undefined") return cache[n];
    for (let i = cache.length; i <= n; i++) {
        cache[i] = (2 * cache[i - 1] + cache[i - 3]) % (1e9 + 7);
    }
    return cache[n];
}
const cache = [1, 1, 2, 5, 11];
export default numTilings;
