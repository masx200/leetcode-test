function validSquare(
    p1: number[],
    p2: number[],
    p3: number[],
    p4: number[],
): boolean {
    return (
        isRightTriangle(p1, p2, p3) &&
        isRightTriangle(p1, p2, p4) &&
        isRightTriangle(p1, p3, p4) &&
        isRightTriangle(p2, p3, p4)
    );
}
function isRightTriangle(p1: number[], p2: number[], p3: number[]) {
    const d1 = (p1[0] - p2[0]) * (p1[0] - p2[0]) +
        (p1[1] - p2[1]) * (p1[1] - p2[1]);
    const d2 = (p2[0] - p3[0]) * (p2[0] - p3[0]) +
        (p2[1] - p3[1]) * (p2[1] - p3[1]);
    const d3 = (p3[0] - p1[0]) * (p3[0] - p1[0]) +
        (p3[1] - p1[1]) * (p3[1] - p1[1]);
    if (
        (d1 > d2 && d2 == d3 && d2 + d3 == d1) ||
        (d2 > d1 && d1 == d3 && d1 + d3 == d2) ||
        (d3 > d1 && d1 == d2 && d1 + d2 == d3)
    ) {
        return true;
    }
    return false;
}
export default validSquare;
