import { assertEquals } from "asserts";
import canPartitionKSubsets from "./index.ts";
Deno.test("partition-to-k-equal-sum-subsets", () => {
    const nums = [4, 3, 2, 3, 5, 2, 1],
        k = 4,
        输出 = true;

    assertEquals(canPartitionKSubsets(nums, k), 输出);
});
Deno.test("partition-to-k-equal-sum-subsets", () => {
    const nums = [1, 2, 3, 4],
        k = 3,
        输出 = false;

    assertEquals(canPartitionKSubsets(nums, k), 输出);
});
