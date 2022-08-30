import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

import deserialize from "./index.ts";

Deno.test("mini-parser", () => {
    assertEquals(324, deserialize("324").toJSON());
    assertEquals(
        [123, [456, [789]]],
        deserialize("[123,[456,[789]]]").toJSON(),
    );
});
