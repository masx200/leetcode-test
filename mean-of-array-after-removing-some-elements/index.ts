function trimMean(arr: number[]): number {
    arr.sort((a, b) => a - b);
    const len = arr.length / 20;
    return (
        arr.slice(len, -len).reduce((a, v) => a + v) / (arr.length - 2 * len)
    );
}
export default trimMean;
