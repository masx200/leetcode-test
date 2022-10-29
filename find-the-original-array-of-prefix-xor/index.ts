export default function findArray(pref: number[]): number[] {
    return pref.map((v, i, a) => i === 0 ? v : v ^ a[i - 1]);
}
