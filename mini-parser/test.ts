import { assertEquals } from "asserts";

import deserialize from "./index.ts";
import { NestedIntegerToJSON } from "./NestedInteger.ts";

Deno.test("mini-parser", () => {
    assertEquals(324, NestedIntegerToJSON(deserialize("324")));
    assertEquals(
        [123, [456, [789]]],
        NestedIntegerToJSON(deserialize("[123,[456,[789]]]")),
    );
});
