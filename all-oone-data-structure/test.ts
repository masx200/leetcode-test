import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";
import { runScript } from "leetcode-class";

import AllOne from "./index.ts";

Deno.test("all-oone-data-structure", () => {
    assertEquals(
        [null, null, null, "hello", "hello", null, "hello", "leet"],
        runScript(
            [
                "AllOne",
                "inc",
                "inc",
                "getMaxKey",
                "getMinKey",
                "inc",
                "getMaxKey",
                "getMinKey",
            ],
            [[], ["hello"], ["hello"], [], [], ["leet"], [], []],
            [AllOne],
        ),
    );
});
