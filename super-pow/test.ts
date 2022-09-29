import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";

import superPow from "./index.ts";

Deno.test("super-pow", () => {
    const inputs = [
        [2, [3]],
        [2, [1, 0]],
        [1, [4, 3, 3, 8, 5, 2]],
    ] as Array<Parameters<typeof superPow>>;
    const outputs = [8, 1024, 1];
    assertEquals(
        inputs.map(([x, y]) => superPow(x, y)),
        outputs,
    );
});
