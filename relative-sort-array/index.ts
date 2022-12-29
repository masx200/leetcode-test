function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const { length } = arr2;
    const map = new Map<number, number>();
    for (let i = 0; i < length; i++) {
        map.set(arr2[i], i + 1);
    }

    arr1.sort((a, b) => {
        const aIndex = map.get(a);
        const bIndex = map.get(b);
        if (aIndex && bIndex) {
            return aIndex - bIndex;
        } else if (!aIndex && !bIndex) {
            return a - b;
        } else {
            return aIndex ? -1 : 1;
        }
    });

    return arr1;
}
export default relativeSortArray;
