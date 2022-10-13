import { Poly } from "./Poly.ts";
import { assertEquals } from "https://deno.land/std@0.159.0/testing/asserts.ts";
import { tokenize } from "./tokenize.ts";

Deno.test("poly", () => {
    const p1 = new Poly([
        [[], 8],
        [["e"], 1],
    ]);
    // assertEquals([...p1]);
    assertEquals(
        [
            [[], 8],
            [["e"], 1],
        ],
        [...p1]
    );
    const p2 = new Poly([
        [[], -8],
        [["e"], 1],
    ]);
    // assertEquals([...p2]);
    assertEquals(
        [
            [[], -8],
            [["e"], 1],
        ],
        [...p2]
    );
    const p3 = p1.mul(p2);
    // assertEquals([...p3]);
    assertEquals(
        [
            [[], -64],
            [["e", "e"], 1],
        ],
        [...p3]
    );
    assertEquals(p1.toList(), ["1*e", "8"]);
    assertEquals(p2.toList(), ["1*e", "-8"]);
    assertEquals(p3.toList(), ["1*e*e", "-64"]);
    const p4 = p1.add(p2);
    assertEquals([...p4], [[["e"], 2]]);
    assertEquals(p4.toList(), ["2*e"]);
    const p5 = p1.sub(p2);
    assertEquals([...p5], [[[], 16]]);
    assertEquals(p5.toList(), ["16"]);
    const p6 = new Poly([
        [[], -8],
        [["e"], 1],
    ]).mul(
        new Poly([
            [[], -8],
            [["a"], 1],
        ])
    );
    assertEquals(
        [...p6],
        [
            [[], 64],
            [["a"], -8],
            [["e"], -8],
            [["a", "e"], 1],
        ]
    );
    assertEquals(p6.toList(), ["1*a*e", "-8*a", "-8*e", "64"]);
});
Deno.test("tokenize", () => {
    assertEquals(tokenize("e + 8 - a + 5", ["e"], [1]), [
        1,
        "+",
        8,
        "-",
        "a",
        "+",
        5,
    ]);
    assertEquals(
        tokenize(
            "e - 8 + temperature - pressure",
            ["e", "temperature"],
            [1, 12]
        ),
        [1, "-", 8, "+", 12, "-", "pressure"]
    );
    assertEquals(tokenize("(e + 8) * (e - 8)", [], []), [
        "(",
        "e",
        "+",
        8,
        ")",
        "*",
        "(",
        "e",
        "-",
        8,
        ")",
    ]);
});
