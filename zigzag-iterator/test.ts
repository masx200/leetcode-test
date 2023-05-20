import { assertEquals } from "asserts";

import ZigzagIterator from "./index.ts";

Deno.test("zigzag-iterator", () => {
    const v1 = [1, 2],
        v2 = [3, 4, 5, 6],
        OUTPUT = [1, 3, 2, 4, 5, 6];

    const zzit = new ZigzagIterator(v1, v2);

    const res: number[] = [];

    while (zzit.hasNext()) {
        res.push(zzit.next());
    }
    assertEquals(res, OUTPUT);
});
Deno.test("zigzag-iterator", () => {
    const v1 = [1],
        v2: number[] = [],
        OUTPUT = [1];

    const zzit = new ZigzagIterator(v1, v2);

    const res: number[] = [];

    while (zzit.hasNext()) {
        res.push(zzit.next());
    }
    assertEquals(res, OUTPUT);
});
Deno.test("zigzag-iterator", () => {
    const v1: number[] = [],
        v2 = [1],
        OUTPUT = [1];

    const zzit = new ZigzagIterator(v1, v2);

    const res: number[] = [];

    while (zzit.hasNext()) {
        res.push(zzit.next());
    }
    assertEquals(res, OUTPUT);
});
