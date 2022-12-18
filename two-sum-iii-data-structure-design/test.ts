import TwoSum from "./index.ts";
import { assertEquals } from "asserts";
Deno.test("two-sum-iii-data-structure-design", () => {
    const ts = new TwoSum();
    ts.add(1);
    ts.add(3);
    ts.add(5);
    assertEquals(ts.find(4), true);
    assertEquals(ts.find(7), false);
});
