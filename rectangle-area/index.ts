export default function computeArea(
    ax1: number,
    ay1: number,
    ax2: number,
    ay2: number,
    bx1: number,
    by1: number,
    bx2: number,
    by2: number,
): number {
    const x1 = Math.max(ax1, bx1);
    const x2 = Math.min(ax2, bx2);
    const y1 = Math.max(ay1, by1);
    const y2 = Math.min(ay2, by2);
    const allSquare = Math.abs((ax2 - ax1) * (ay2 - ay1)) +
        Math.abs((bx2 - bx1) * (by2 - by1));
    if (x1 >= x2 || y1 >= y2) {
        return allSquare;
    }
    return allSquare - ((x2 - x1) * (y2 - y1));
}
