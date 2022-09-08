export default function checkOverlap(
    radius: number,
    xCenter: number,
    yCenter: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
): boolean {
    const dx = x1 > xCenter
        ? (x1 - xCenter)
        : (x2 < xCenter ? xCenter - x2 : 0);
    const dy = y1 > yCenter
        ? (y1 - yCenter)
        : (y2 < yCenter ? yCenter - y2 : 0);

    return dx * dx + dy * dy <= radius * radius;
}
