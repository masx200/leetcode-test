import { zip } from "../deps.ts";

export default function transpose(matrix: number[][]): number[][] {
    return zip(...matrix) as number[][];
}
