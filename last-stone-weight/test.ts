import { assertEquals } from "../deps.ts";
import lastStoneWeight from "./index.ts";

Deno.test("last-stone-weight", () => {
    const stones = [2, 7, 4, 1, 8, 1];
    assertEquals(1, lastStoneWeight(stones));
    assertEquals(1, lastStoneWeight([1]));
});
