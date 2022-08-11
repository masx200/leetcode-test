import { assert, assertEquals } from "../deps.ts";
import { float64equals } from "../utils/float64equals.ts";
import MaxQueue from "./index.ts";

Deno.test("dui-lie-de-zui-da-zhi-lcof", () => {
    const variable_name = "maxQueue";
    const class_name = "MaxQueue";
    const inputs: Array<[string[], number[][]]> = [
        [
            [
                "MaxQueue",
                "push_back",
                "push_back",
                "max_value",
                "pop_front",
                "max_value",
            ],
            [[], [1], [2], [], [], []],
        ],
        [
            [
                "MaxQueue",
                "pop_front",
                "pop_front",
                "pop_front",
                "pop_front",
                "pop_front",
                "push_back",
                "max_value",
                "push_back",
                "max_value",
            ],
            [[], [], [], [], [], [], [15], [], [9], []],
        ],
        [
            [
                "MaxQueue",
                "push_back",
                "push_back",
                "max_value",
                "pop_front",
                "max_value",
                "pop_front",
                "pop_front",
                "pop_front",
                "pop_front",
                "pop_front",
                "push_back",
                "max_value",
                "push_back",
                "max_value",
            ],
            [
                [],
                [100],
                [200],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [150],
                [],
                [90],
                [],
            ],
        ],
    ];
    const outputs = [
        [null, null, null, 2, 1, 2],
        [null, -1, -1, -1, -1, -1, null, 15, null, 15],
        [
            null,
            null,
            null,
            200,
            100,
            200,
            200,
            -1,
            -1,
            -1,
            -1,
            null,
            150,
            null,
            150,
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
        const results = fn(MaxQueue);
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
