export default function minSwapsCouples(row: number[]): number {
    let ans = 0;
    const n = row.length;
    for (let i = 0; i < n; i++) {
        if (i < n - 1 && (row[i] ^ row[i + 1]) == 1) {
            i++;
            continue;
        }
        for (let j = i + 1; j < n; j++) {
            if ((row[j] ^ row[i]) == 1) {
                const t = row[i + 1];
                row[++i] = row[j];
                row[j] = t;
                ans++;
                break;
            }
        }
    }
    return ans;
}
