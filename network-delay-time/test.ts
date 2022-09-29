import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import networkDelayTime from "./index.ts";
Deno.test("network-delay-time", () => {
    const inputs = [
        [[[2, 1, 1], [2, 3, 1], [3, 4, 1]], 4, 2],
        [[[1, 2, 1]], 2, 1],
        [[[1, 2, 1]], 2, 2],
    ];
    const outputs = [2, 1, -1];
    assertEquals(
        inputs.map((a) => Reflect.apply(networkDelayTime, null, a)),
        outputs,
    );
});
