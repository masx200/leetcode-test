import TwoSum from "./index.ts";
import { assertEquals } from "asserts";
Deno.test("two-sum-iii-data-structure-design", () => {
    const ts = new TwoSum();
    ts.add(3);
    ts.add(3);
    ts.add(2);
    assertEquals(ts.find(3), false);
    assertEquals(ts.find(6), true);
});
Deno.test("two-sum-iii-data-structure-design", () => {
    const ts = new TwoSum();
    ts.add(1);
    ts.add(3);
    ts.add(5);
    assertEquals(ts.find(4), true);
    assertEquals(ts.find(7), false);
});
Deno.test("two-sum-iii-data-structure-design", () => {
    const ts = new TwoSum();
    ts.add(3);
    ts.add(1);
    ts.add(2);
    assertEquals(ts.find(3), true);
    assertEquals(ts.find(6), false);
});
