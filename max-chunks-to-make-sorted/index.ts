export default function maxChunksToSorted(arr: number[]): number {
    let m = 0,
        res = 0;
    for (let i = 0; i < arr.length; i++) {
        m = Math.max(m, arr[i]);
        if (m === i) {
            res++;
        }
    }
    return res;
}
