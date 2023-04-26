function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    const res = [];
    res.length = arr.length;
    for (const [i, v] of arr.entries()) {
        res[i] = fn(v, i);
    }
    return res;
}
export default map;
