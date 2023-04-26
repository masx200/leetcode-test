function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
    const res = [];

    for (const [i, v] of arr.entries()) {
        if (fn(v, i)) res.push(v);
    }
    return res;
}
export default filter;
