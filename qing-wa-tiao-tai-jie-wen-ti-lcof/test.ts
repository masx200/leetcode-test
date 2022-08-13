import getClimbStairs from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.152.0/testing/asserts.ts";
Deno.test("qing-wa-tiao-tai-jie-wen-ti-lcof", () => {
    const inputs = [0, 1, 2, 44, 55, 77];
    const outputs = [1, 1, 2, 134903163, 851432142, 261180706];
    assertEquals(
        inputs.map((input) => getClimbStairs(input)),
        outputs,
    );
});
