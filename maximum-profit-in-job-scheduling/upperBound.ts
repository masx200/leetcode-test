export function upperBound(
    a: number[][],
    x: number,
    greater: (v: number[], x: number) => boolean,
    left = 0,
    right = a.length,
): number {
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (greater(a[mid], x)) right = mid;
        else left = mid + 1;
    }
    return left;
}
