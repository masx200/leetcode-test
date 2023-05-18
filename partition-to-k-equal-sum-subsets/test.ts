import { assertEquals } from "asserts";
import canPartitionKSubsets from "./index.ts";

Deno.test("partition-to-k-equal-sum-subsets", () => {
    const nums = [4, 3, 2, 3, 5, 2, 1],
        k = 4,
        OUTPUT = true;

    assertEquals(canPartitionKSubsets(nums, k), OUTPUT);
});
Deno.test("partition-to-k-equal-sum-subsets", () => {
    const nums = [1, 2, 3, 4],
        k = 3,
        OUTPUT = false;

    assertEquals(canPartitionKSubsets(nums, k), OUTPUT);
});
