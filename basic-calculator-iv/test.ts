import { assertEquals } from "https://deno.land/std@0.163.0/testing/asserts.ts";

import basicCalculatorIV from "./index.ts";
import { Poly } from "./Poly.ts";
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
        [...p1],
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
        [...p2],
    );
    const p3 = p1.mul(p2);
    // assertEquals([...p3]);
    assertEquals(
        [
            [[], -64],
            [["e", "e"], 1],
        ],
        [...p3],
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
        ]),
    );
    assertEquals(
        [...p6],
        [
            [[], 64],
            [["a"], -8],
            [["e"], -8],
            [["a", "e"], 1],
        ],
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
            [1, 12],
        ),
        [1, "-", 8, "+", 12, "-", "pressure"],
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
    assertEquals(tokenize("1 + 2 * 3", [], []), [1, "+", 2, "*", 3]);
    assertEquals(
        tokenize(
            "((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))",
            [],
            [],
        ),
        [
            "(",
            "(",
            "a",
            "-",
            "b",
            ")",
            "*",
            "(",
            "b",
            "-",
            "c",
            ")",
            "+",
            "(",
            "c",
            "-",
            "a",
            ")",
            ")",
            "*",
            "(",
            "(",
            "a",
            "-",
            "b",
            ")",
            "+",
            "(",
            "b",
            "-",
            "c",
            ")",
            "*",
            "(",
            "c",
            "-",
            "a",
            ")",
            ")",
        ],
    );
    assertEquals(tokenize("a * b * c + b * a * c * 4", [], []), [
        "a",
        "*",
        "b",
        "*",
        "c",
        "+",
        "b",
        "*",
        "a",
        "*",
        "c",
        "*",
        4,
    ]);
});
Deno.test("basic-calculator-iv", () => {
    assertEquals(
        basicCalculatorIV(
            "e - 8 + temperature - pressure",
            ["e", "temperature"],
            [1, 12],
        ),
        ["-1*pressure", "5"],
    );
    assertEquals(basicCalculatorIV("e + 8 - a + 5", ["e"], [1]), [
        "-1*a",
        "14",
    ]);
    assertEquals(basicCalculatorIV("(e + 8) * (e - 8)", [], []), [
        "1*e*e",
        "-64",
    ]);
    assertEquals(basicCalculatorIV("a * b * c + b * a * c * 4", [], []), [
        "5*a*b*c",
    ]);
    assertEquals(
        basicCalculatorIV(
            "((a - b) * (b - c) + (c - a)) * ((a - b) + (b - c) * (c - a))",
            [],
            [],
        ),
        [
            "-1*a*a*b*b",
            "2*a*a*b*c",
            "-1*a*a*c*c",
            "1*a*b*b*b",
            "-1*a*b*b*c",
            "-1*a*b*c*c",
            "1*a*c*c*c",
            "-1*b*b*b*c",
            "2*b*b*c*c",
            "-1*b*c*c*c",
            "2*a*a*b",
            "-2*a*a*c",
            "-2*a*b*b",
            "2*a*c*c",
            "1*b*b*b",
            "-1*b*b*c",
            "1*b*c*c",
            "-1*c*c*c",
            "-1*a*a",
            "1*a*b",
            "1*a*c",
            "-1*b*c",
        ],
    );
    assertEquals(
        basicCalculatorIV(
            "(9 * ((5 - 1 - f) + 11 * (12 * d - p) + (y - ac) + (bk * 8 + 6 * cg * r)) + cl) * o * ((cf * bp + p - 7) + (b + bq - bk) - 2) + bk",
            [
                "d",
                "g",
                "h",
                "j",
                "l",
                "o",
                "s",
                "u",
                "v",
                "w",
                "af",
                "ag",
                "ah",
                "ak",
                "at",
                "au",
                "av",
                "aw",
                "az",
                "bc",
                "be",
                "bg",
                "bj",
                "bm",
                "bn",
                "bq",
                "br",
                "bs",
                "bt",
                "bu",
                "bv",
                "bw",
                "bx",
                "by",
                "bz",
                "ca",
                "cd",
                "ce",
                "cf",
                "ch",
                "ci",
                "ck",
                "cq",
                "cr",
                "cs",
                "cu",
                "cv",
            ],
            [
                3,
                6,
                7,
                9,
                11,
                1,
                5,
                7,
                8,
                9,
                10,
                11,
                12,
                2,
                11,
                12,
                0,
                1,
                4,
                12,
                1,
                3,
                6,
                9,
                10,
                0,
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                2,
                5,
                6,
                7,
                9,
                10,
                12,
                5,
                6,
                7,
                9,
                10,
            ],
        ),
        [
            "54*b*cg*r",
            "-54*bk*cg*r",
            "378*bp*cg*r",
            "54*cg*p*r",
            "-9*ac*b",
            "9*ac*bk",
            "-63*ac*bp",
            "-9*ac*p",
            "72*b*bk",
            "1*b*cl",
            "-9*b*f",
            "-99*b*p",
            "9*b*y",
            "-72*bk*bk",
            "504*bk*bp",
            "-1*bk*cl",
            "9*bk*f",
            "171*bk*p",
            "-9*bk*y",
            "7*bp*cl",
            "-63*bp*f",
            "-693*bp*p",
            "63*bp*y",
            "-486*cg*r",
            "1*cl*p",
            "-9*f*p",
            "-99*p*p",
            "9*p*y",
            "81*ac",
            "3600*b",
            "-4247*bk",
            "25200*bp",
            "-9*cl",
            "81*f",
            "4491*p",
            "-81*y",
            "-32400",
        ],
    );
});
