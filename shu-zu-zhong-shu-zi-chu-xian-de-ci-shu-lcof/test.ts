import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";

import singleNumbers from "./index.ts";

Deno.test("shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof", () => {
    const inputs = [
        [4, 1, 4, 6],
        [3, 2, 1, 3],
    ];
    const outputs = [
        [1, 6],
        [1, 2],
    ];
    assertEquals(
        outputs.map((a) => new Set(a)),
        inputs.map(singleNumbers).map((a) => new Set(a)),
    );
});
