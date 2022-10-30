import { assertEquals } from "asserts";

import { assert } from "../deps.ts";
import { float64equals } from "../utils/float64equals.ts";
import MovingAverage from "./index.ts";

Deno.test("moving-average-from-data-stream", () => {
    const variable_name = "movingAverage";
    const class_name = "MovingAverage";
    const inputs: Array<[string[], number[][]]> = [
        [
            ["MovingAverage", "next", "next", "next", "next"],
            [[3], [1], [10], [3], [5]],
        ],
        [
            [
                "MovingAverage",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
            ],
            [
                [3],
                [1],
                [10],
                [3],
                [5],
                [1],
                [10],
                [3],
                [5],
                [1],
                [10],
                [3],
                [5],
            ],
        ],
        [
            [
                "MovingAverage",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
            ],
            [
                [13],
                [17],
                [10],
                [13],
                [5],
                [1],
                [10],
                [773],
                [5],
                [1],
                [7710],
                [3],
                [5],
                [1],
                [10],
                [73],
                [5],
            ],
        ],
        [
            [
                "MovingAverage",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
                "next",
            ],
            [
                [13],
                [17],
                [107],
                [73],
                [5],
                [771],
                [710],
                [37],
                [5],
                [1],
                [7710],
                [3],
                [57],
            ],
        ],
    ];
    const outputs = [
        [null, 1.0, 5.5, 4.66667, 6.0],
        [
            null,
            1.0,
            5.5,
            4.66667,
            6.0,
            3.0,
            5.33333,
            4.66667,
            6.0,
            3.0,
            5.33333,
            4.66667,
            6.0,
        ],
        [
            null,
            17.0,
            13.5,
            13.33333,
            11.25,
            9.2,
            9.33333,
            118.42857,
            104.25,
            92.77778,
            854.5,
            777.09091,
            712.75,
            658.0,
            657.46154,
            662.30769,
            661.69231,
        ],
        [
            null,
            17.0,
            62.0,
            65.66667,
            50.5,
            194.6,
            280.5,
            245.71429,
            215.625,
            191.77778,
            943.6,
            858.09091,
            791.33333,
        ],
    ];

    inputs.forEach(([input, args], i) => {
        const out = outputs[i];

        const fn = new Function(
            class_name,
            `
        
        const res=[];
${
                input
                    .map(function (name, i) {
                        if (i === 0) {
                            return `
        const ${variable_name} =new ${class_name}(${args[i].join(", ")});

        res.push(null);
                    `;
                        }
                        return `res.push(${variable_name}.${name}(${
                            args[i].join(", ")
                        }));`;
                    })
                    .join("\n")
            }
        return res;
        `,
        );
        // console.log(fn)
        // console.log(fn.toString());
        const results = fn(MovingAverage);
        // console.log(results, out);
        assert(Array.isArray(results));
        results.forEach((result, j) => {
            const expected = out[j];

            if (typeof result === "number") {
                assert(typeof result === typeof expected);
                assert(
                    float64equals(
                        result,
                        expected as number,
                        7.142852039915146e-6,
                    ),
                    `${result} !== ${expected}`,
                );
            } else if (expected !== null) {
                assertEquals(result, expected);
            }
        });
    });
});
