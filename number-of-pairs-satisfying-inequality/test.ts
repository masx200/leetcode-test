import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";
import numberOfPairs from "./index.ts";
Deno.test("number-of-pairs-satisfying-inequality", () => {
    assertEquals(
        [
            [[3, 2, 5], [2, 2, 1], 1],
            [[3, -1], [-2, 2], -1],
            //@ts-ignore
        ].map((a) => numberOfPairs(...a)),
        [3, 0],
    );
});
