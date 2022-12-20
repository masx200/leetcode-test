import { assertEquals } from "asserts";

import totalCost from "./index.ts";

Deno.test("total-cost-to-hire-k-workers", () => {
    const costs = [17, 12, 10, 2, 7, 2, 11, 20, 8], k = 3, candidates = 4;
    assertEquals(11, totalCost(costs, k, candidates));
});
Deno.test("total-cost-to-hire-k-workers", () => {
    const costs = [1, 2, 4, 1], k = 3, candidates = 3;
    assertEquals(4, totalCost(costs, k, candidates));
});
