export default function addNegabinary(
    arr1: number[],
    arr2: number[],
): number[] {
    const len = Math.max(arr1.length, arr2.length);
    arr1 = arr1.reverse();
    arr2 = arr2.reverse();
    let arr3: number[] = [];
    for (let i = 0; i <= len; i++) {
        arr3[i] = (arr1[i] || 0) + (arr2[i] || 0) + (arr3[i] || 0);
        if (arr3[i] == -1) {
            arr3[i] = 1;
            arr3[i + 1] = 1;
        } else if (arr3[i] == 2) {
            arr3[i] = 0;
            arr3[i + 1] = -1;
        } else if (arr3[i] == 3) {
            arr3[i] = 1;
            arr3[i + 1] = -1;
        }
    }
    arr3 = arr3.reverse();
    while (arr3.length > 1 && arr3[0] == 0) {
        arr3.shift();
    }
    return arr3;
}
