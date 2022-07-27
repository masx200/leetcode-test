import { assertEquals } from "../deps.ts";
import minimumTotal from "./index.ts";

Deno.test("triangle", () => {
    const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
    assertEquals(minimumTotal(triangle), 11);
    assertEquals(minimumTotal([[-10]]), -10);
});
