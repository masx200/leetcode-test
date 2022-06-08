import { sum } from "../richest-customer-wealth/sum.ts";

export function dot(vector1: number[], vector2: number[]): number {
    return sum(vector1.map((v, i) => v * vector2[i]));
}
