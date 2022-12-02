function secondHighest(s: string): number {
    return Number(
        [...new Set(s.match(/[\d]/g))].sort((a, b) => b.localeCompare(a))[1] ||
            -1,
    );
}
export default secondHighest;
