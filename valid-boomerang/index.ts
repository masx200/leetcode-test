import { float64equals } from "../utils/float64equals.ts";
import { dot } from "./dot.ts";
import { norm } from "./norm.ts";

export default function isBoomerang(points: number[][]): boolean {
    if (points.length !== 3) return false;
    const [[x1, y1], [x2, y2], [x3, y3]] = points;

    if (
        (x1 === x2 && y1 === y2) ||
        (x1 === x3 && y1 === y3) ||
        (x3 === x2 && y3 === y2)
    ) {
        return false;
    }
    const vector1: [number, number] = [x2 - x1, y2 - y1];
    const vector2: [number, number] = [x3 - x1, y3 - y1];
    // return !float64equals(Math.abs(cos(vector2, vector1)), 1);
    const innerProduct = dot(vector2, vector1);
    return !float64equals(
        Math.abs(innerProduct),
        norm(vector2) * norm(vector1)
    );
}
