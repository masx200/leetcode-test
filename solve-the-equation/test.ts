import { assertEquals } from "asserts";

import solveEquation from "./index.ts";

Deno.test("solve-the-equation", () => {
    const inputs = [
        "12x=99x",
        "x+5-3+x=6+x-2",
        "x=x",
        "2x=x",
        "-x=-1",
        "2x+3x-6x=x+2",
        "12=99",
    ];
    const outputs = [
        "x=0",
        "x=2",
        "Infinite solutions",
        "x=0",
        "x=1",
        "x=-1",
        "No solution",
    ];
    assertEquals(inputs.map((input) => solveEquation(input)), outputs);
});
