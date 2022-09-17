import { assertEquals } from "asserts";
import guessNumberHigherOrLower from "./index.ts";
Deno.test("guess-number-higher-or-lower", () => {
    const inputs = [[10, 6], [1, 1], [2, 1], [2147483647, 2147483647]];
    const outputs = [6, 1, 1, 2147483647];
    assertEquals(
        inputs.map((a) =>
            guessNumberHigherOrLower((n) => Math.sign(-n + a[1]))(a[0])
        ),
        outputs,
    );
});
