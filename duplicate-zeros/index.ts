export default function duplicateZeros(arr: number[]): void {
    const ans: Array<number> = [];
    const length = arr.length;
    for (const num of arr) {
        if (ans.length >= length) break;
        if (num === 0) {
            ans.push(0, 0);
        } else {
            ans.push(num);
        }
    }
    ans.forEach((v, i) => {
        if (i >= length) return;
        arr[i] = v;
    });
}
