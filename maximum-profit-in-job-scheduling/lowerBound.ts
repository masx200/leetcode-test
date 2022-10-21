export function lowerBound(
    left: number,
    right: number,
    less: (m: number) => boolean,
) {
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (less(mid)) left = mid + 1;
        else right = mid;
    }
    return left;
}
