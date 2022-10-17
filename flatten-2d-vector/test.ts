import { assertEquals } from "https://deno.land/std@0.160.0/testing/asserts.ts";

import Vector2D from "./index.ts";

Deno.test("flatten-2d-vector", () => {
    const iterator = new Vector2D([[1, 2], [3], [4]]);

    assertEquals(1, iterator.next()); // 返回 1
    assertEquals(2, iterator.next()); // 返回 2
    assertEquals(3, iterator.next()); // 返回 3
    assertEquals(true, iterator.hasNext()); // 返回 true
    assertEquals(true, iterator.hasNext()); // 返回 true
    assertEquals(4, iterator.next()); // 返回 4
    assertEquals(false, iterator.hasNext()); // 返回 false
});
Deno.test("flatten-2d-vector", () => {
    const iterator = new Vector2D([[1, 2], [3], [4, 5, 6]]);

    const res: number[] = [];
    while (iterator.hasNext()) {
        res.push(iterator.next() as number);
    }
    assertEquals([1, 2, 3, 4, 5, 6], res);
});
