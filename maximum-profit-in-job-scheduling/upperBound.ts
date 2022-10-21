export function upperBound(
    left: number,
    right: number,
    greater: (m: number) => boolean,
): number {
    while (left < right) {
        const mid = Math.floor(left + (right - left) / 2);
        if (greater(mid)) right = mid;
        else left = mid + 1;
    }
    return left;
}
