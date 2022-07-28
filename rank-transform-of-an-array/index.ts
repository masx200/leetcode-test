function arrayRankTransform(arr: number[]): number[] {
    const clone = Array.from(arr);
    clone.sort((a, b) => a - b);

    let idx = 0;
    const map = new Map<number, number>();
    for (const i of clone) {
        if (!map.has(i)) map.set(i, ++idx);
    }
    const ans = Array.from(arr).map((_, i) => map.get(arr[i]) ?? 0);

    return ans;
}
export default arrayRankTransform;
