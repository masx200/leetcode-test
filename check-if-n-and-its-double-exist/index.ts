export default function checkIfExist(arr: number[]): boolean {
    const set = new Set<number>();

    for (let i = 0; i < arr.length; i++) {
        if (set.has(arr[i] * 2) || (arr[i] % 2 === 0 && set.has(arr[i] / 2))) {
            return true;
        }
        set.add(arr[i]);
    }

    return false;
}
