export default function oneEditAway(first: string, second: string): boolean {
    const n = first.length;
    const m = second.length;
    const a = first;
    const b = second;

    if (Math.abs(n - m) > 1) return false;
    if (n > m) return oneEditAway(b, a);

    let i = 0;
    let j = 0;
    let cnt = 0;
    while (i < n && j < m && cnt <= 1) {
        const c1 = a[i];
        const c2 = b[j];
        if (c1 === c2) {
            i++;

            j++;
        } else {
            if (n === m) {
                i++;
                j++;
                cnt++;
            } else {
                j++;
                cnt++;
            }
        }
    }
    return cnt <= 1;
}
