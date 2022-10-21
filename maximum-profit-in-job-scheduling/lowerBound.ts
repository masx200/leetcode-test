export function lowerBound(
    a: number[][],
    x: number,
    less: (v: number[], x: number) => boolean,
    left = 0,
    right = a.length,
) {
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (less(a[mid], x)) left = mid + 1;
        else right = mid;
    }
    return left;
}
