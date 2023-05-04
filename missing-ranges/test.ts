import { assertEquals } from "asserts";

import findMissingRanges from "./index.ts";

Deno.test("missing-ranges", () => {
    assertEquals(
        ["2", "4->49", "51->74", "76->99"],
        findMissingRanges([0, 1, 3, 50, 75], 0, 99),
    );

    assertEquals(
        ["-100->-1", "2", "4->49", "51->74"],
        findMissingRanges([0, 1, 3, 50, 75], -100, 75),
    );

    assertEquals(
        ["2", "4->49", "51->74", "76->200"],
        findMissingRanges([0, 1, 3, 50, 75], 0, 200),
    );
    assertEquals(
        ["2", "4->49", "51->74", "76->89", "91->99"],
        findMissingRanges([0, 1, 3, 50, 75, 90], 0, 99),
    );
});
