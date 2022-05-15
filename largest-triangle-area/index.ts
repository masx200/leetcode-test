import { combinations } from "../deps.ts";

export default function largestTriangleArea(points: number[][]): number {
    let ret = 0;
    for (const v of combinations(points, 3)) {
        const pos = v.flat() as [
            number,
            number,
            number,
            number,
            number,
            number,
        ];
        const area = triangleArea(...pos);
        ret = Math.max(ret, area);
    }

    return ret;
}
const triangleArea = (
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    x3: number,
    y3: number,
) => {
    return (
        0.5 *
        Math.abs(x1 * y2 + x2 * y3 + x3 * y1 - x1 * y3 - x2 * y1 - x3 * y2)
    );
};
