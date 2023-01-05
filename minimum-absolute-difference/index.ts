function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a, b) => a - b);
    return arr.reduce(
        ([res, num], v, i, a): [number[][], number] => {
            if (i + 1 < a.length) {
                if (num > Math.abs(v - a[i + 1])) {
                    return [[[v, a[i + 1]]], Math.abs(v - a[i + 1])];
                } else if (num === Math.abs(v - a[i + 1])) {
                    res.push([v, a[i + 1]]);
                }
            }
            return [res, num];
        },
        [[], Infinity] as [number[][], number]
    )[0];
}
export default minimumAbsDifference;
