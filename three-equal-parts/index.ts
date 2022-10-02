import sum from "https://cdn.skypack.dev/lodash@4.17.21/sum?dts";

export default function threeEqualParts(arr: number[]): number[] {
    const summ = sum(arr);
    if (summ % 3 !== 0) {
        return [-1, -1];
    }
    if (summ === 0) {
        return [0, 2];
    }

    const partial = Math.floor(summ / 3);
    let first = 0,
        second = 0,
        third = 0,
        cur = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            if (cur === 0) {
                first = i;
            } else if (cur === partial) {
                second = i;
            } else if (cur === 2 * partial) {
                third = i;
            }
            cur++;
        }
    }

    const len = arr.length - third;
    if (first + len <= second && second + len <= third) {
        let i = 0;
        while (third + i < arr.length) {
            if (
                arr[first + i] !== arr[second + i] ||
                arr[first + i] !== arr[third + i]
            ) {
                return [-1, -1];
            }
            i++;
        }
        return [first + len - 1, second + len];
    }
    return [-1, -1];
}
