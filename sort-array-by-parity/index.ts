import { groupBy } from "../deps.ts";

export default function sortArrayByParity(nums: number[]): number[] {
    return Object.values(
        groupBy(nums, (a) => Number(a % 2)),
    ).flat() as number[];
}
