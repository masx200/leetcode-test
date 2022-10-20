export function lowerBound(a: number[], x: number) {
    let left = 0,
        right = a.length;
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (a[mid] < x) left = mid + 1;
        else right = mid;
    }
    return left;
}
