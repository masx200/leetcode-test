export default function maxEnvelopes(envelopes: number[][]): number {
    if (envelopes.length === 0) {
        return 0;
    }

    const n = envelopes.length;
    envelopes.sort((e1, e2) => {
        if (e1[0] - e2[0]) {
            return e1[0] - e2[0];
        } else {
            return e2[1] - e1[1];
        }
    });

    const f = [envelopes[0][1]];
    for (let i = 1; i < n; ++i) {
        const num = envelopes[i][1];
        if (num > f[f.length - 1]) {
            f.push(num);
        } else {
            const index = lowerBound(f, num);
            f[index] = num;
        }
    }
    return f.length;
}
export function lowerBound(f: number[], target: number) {
    let low = 0,
        high = f.length - 1;
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        if (f[mid] < target) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return low;
}
