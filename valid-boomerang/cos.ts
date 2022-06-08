import { dot } from "./dot.ts";
import { norm } from "./norm.ts";

export function cos(vector1: number[], vector2: number[]): number {
    return dot(vector2, vector1) / norm(vector2) / norm(vector1);
}
