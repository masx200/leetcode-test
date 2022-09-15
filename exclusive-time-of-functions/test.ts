import { assertEquals } from "https://deno.land/std@0.156.0/testing/asserts.ts";

import exclusiveTime from "./index.ts";

Deno.test("exclusive-time-of-functions", function () {
    const inputs: Array<Parameters<typeof exclusiveTime>> = [
        [2, ["0:start:0", "1:start:2", "1:end:5", "0:end:6"]],
        [
            1,
            [
                "0:start:0",
                "0:start:2",
                "0:end:5",
                "0:start:6",
                "0:end:6",
                "0:end:7",
            ],
        ],
        [
            2,
            [
                "0:start:0",
                "0:start:2",
                "0:end:5",
                "1:start:6",
                "1:end:6",
                "0:end:7",
            ],
        ],
    ];
    const outputs = [[3, 4], [8], [7, 1]];
    assertEquals(inputs.map(([n, logs]) => exclusiveTime(n, logs)), outputs);
});
