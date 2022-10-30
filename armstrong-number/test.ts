import { assertEquals } from "asserts";

import isArmstrong from "./index.ts";

Deno.test("armstrong-number", () => {
    assertEquals([153, 123, 962, 9999].map(isArmstrong), [
        true,
        false,
        false,
        false,
    ]);
});
