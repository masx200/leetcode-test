import { assertEquals } from "asserts";

import waysToBuyPensPencils from "./index.ts";

Deno.test("number-of-ways-to-buy-pens-and-pencils", () => {
    assertEquals(waysToBuyPensPencils(20, 10, 5), 9);
    assertEquals(waysToBuyPensPencils(5, 10, 10), 1);
});
