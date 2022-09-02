import { assertEquals } from "https://deno.land/std@0.154.0/testing/asserts.ts";

import fractionAddition from "./index.ts";

Deno.test("fraction-addition-and-subtraction", () => {
    assertEquals(
        "77464/145635",
        fractionAddition("100/399-133/2555-1/2+1/2-1/2+1/2+1/3"),
    );
    assertEquals("0/1", fractionAddition("-1/2+1/2"));
    assertEquals("1/3", fractionAddition("-1/2+1/2+1/3"));
    assertEquals("-1/6", fractionAddition("1/3-1/2"));
});
