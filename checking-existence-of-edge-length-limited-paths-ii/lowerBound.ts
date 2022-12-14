export function lowerBound(
    left: number,
    right: number,
    compare: (i: number) => number,
): number {
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (compare(mid) < 0) left = mid + 1;
        else right = mid;
    }
    return left;
}
