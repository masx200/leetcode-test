import StringIterator from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.157.0/testing/asserts.ts";
Deno.test("design-compressed-string-iterator", () => {
    const iterator = new StringIterator("L1e2t1C1o1d1e1");
    const res: any[] = [];
    res.push(iterator.next()); // 'L'
    res.push(iterator.next()); // 'e'
    res.push(iterator.next()); // 'e'
    res.push(iterator.next()); // 't'
    res.push(iterator.next()); // 'C'
    res.push(iterator.next()); // 'o'
    res.push(iterator.next()); // 'd'
    res.push(iterator.hasNext()); // true
    res.push(iterator.next()); // 'e'
    res.push(iterator.hasNext()); // false
    res.push(iterator.next()); // ' '
    assertEquals(res, [
        "L",
        "e",
        "e",
        "t",
        "C",
        "o",
        "d",
        true,
        "e",
        false,
        "",
    ]);
});
