import rectangleArea, { binarySplit } from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.156.0/testing/asserts.ts";
Deno.test("binarySplit-1", () => {
    const current = { left: 0, right: 1000000000, down: 0, up: 1000000000 };
    const result = binarySplit(current);
    // console.log(current, result);
    assertEquals(result, [
        { left: 0, right: 500000000, down: 0, up: 500000000 },
        { left: 0, right: 500000000, down: 500000000, up: 1000000000 },
        { left: 500000000, right: 1000000000, down: 0, up: 500000000 },
        { left: 500000000, right: 1000000000, down: 500000000, up: 1000000000 },
    ]);
});
Deno.test("binarySplit-2", () => {
    const current = { left: 0, right: 3, down: 0, up: 3 };
    const result = binarySplit(current);
    // console.log(current, result);
    assertEquals(result, [
        { left: 0, right: 1, down: 0, up: 1 },
        { left: 0, right: 1, down: 1, up: 3 },
        { left: 1, right: 3, down: 0, up: 1 },
        { left: 1, right: 3, down: 1, up: 3 },
    ]);
});
Deno.test("binarySplit-3", () => {
    const current = { left: 0, right: 1, down: 0, up: 1 };
    const result = binarySplit(current);
    // console.log(current, result);
    assertEquals(result, []);
});
Deno.test("binarySplit-4", () => {
    const current = { left: 0, right: 0, down: 0, up: 0 };
    const result = binarySplit(current);
    // console.log(current, result);
    assertEquals(result, []);
});
Deno.test("binarySplit-5", () => {
    const current = { left: 0, right: 6, down: 0, up: 1 };
    const result = binarySplit(current);
    // console.log(current, result);
    assertEquals(result, [{ left: 0, right: 3, down: 0, up: 1 }, {
        left: 3,
        right: 6,
        down: 0,
        up: 1,
    }]);
});

Deno.test("rectangle-area-ii", () => {
    assertEquals(rectangleArea([[0, 0, 1000000000, 1000000000]]), 49);
});

Deno.test("rectangle-area-ii", () => {
    assertEquals(rectangleArea([[0, 0, 2, 2], [0, 0, 1, 1]]), 4);
});
Deno.test("rectangle-area-ii", () => {
    assertEquals(rectangleArea([[0, 0, 2, 2], [1, 0, 2, 3], [1, 0, 3, 1]]), 6);
});
Deno.test("rectangle-area-ii", () => {
    assertEquals(
        rectangleArea([
            [93516, 44895, 94753, 69358],
            [13141, 52454, 59740, 71232],
            [22877, 11159, 85255, 61703],
            [11917, 8218, 84490, 36637],
            [75914, 29447, 83941, 64384],
            [22490, 71433, 64258, 74059],
            [18433, 51177, 87595, 98688],
            [70854, 80720, 91838, 92304],
            [46522, 49839, 48550, 94096],
            [95435, 37993, 99139, 49382],
            [10618, 696, 33239, 45957],
            [18854, 2818, 57522, 78807],
            [61229, 36593, 76550, 41271],
            [99381, 90692, 99820, 95125],
        ]),
        971243962,
    );
});
