import Bitset from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

Deno.test("design-bitset", () => {
    const bs = new Bitset(5); // bitset = "00000".
    bs.fix(3); // 将 idx = 3 处的值更新为 1 ，此时 bitset = "00010" 。
    bs.fix(1); // 将 idx = 1 处的值更新为 1 ，此时 bitset = "01010" 。
    bs.flip(); // 翻转每一位上的值，此时 bitset = "10101" 。
    assertEquals(false, bs.all()); // 返回 False ，bitset 中的值不全为 1 。
    bs.unfix(0); // 将 idx = 0 处的值更新为 0 ，此时 bitset = "00101" 。
    bs.flip(); // 翻转每一位上的值，此时 bitset = "11010" 。
    assertEquals(true, bs.one()); // 返回 True ，至少存在一位的值为 1 。
    bs.unfix(0); // 将 idx = 0 处的值更新为 0 ，此时 bitset = "01010" 。
    assertEquals(2, bs.count()); // 返回 2 ，当前有 2 位的值为 1 。
    assertEquals("01010", bs.toString()); // 返回 "01010" ，即 bitset 的当前组成情况。
});
