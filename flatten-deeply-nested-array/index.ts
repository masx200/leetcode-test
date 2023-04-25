type MultiDimensionalArray = (number | MultiDimensionalArray)[];

function flat(arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
    if (n === 0) {
        return arr;
    }
    if (arr.every((a) => typeof a === "number")) {
        return arr;
    }

    const res = [];
    for (const a of arr) {
        if (typeof a === "number") {
            res.push(a);
        } else {
            res.push(...a);
        }
    }
    return flat(res, n - 1);
}
export default flat;

export type { MultiDimensionalArray };
