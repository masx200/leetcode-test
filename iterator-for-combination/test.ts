import CombinationIterator from "./index.ts";
import { assertEquals } from "https://deno.land/std@0.153.0/testing/asserts.ts";

Deno.test("iterator-for-combination", () => {
    const res = [];
    const iterator: CombinationIterator = new CombinationIterator("abc", 2); // 创建迭代器 iterator
    res.push(iterator.next()); // 返回 "ab"
    res.push(iterator.hasNext()); // 返回 true
    res.push(iterator.next()); // 返回 "ac"
    res.push(iterator.hasNext()); // 返回 true
    res.push(iterator.next()); // 返回 "bc"
    res.push(iterator.hasNext()); // 返回 false
    assertEquals(res, ["ab", true, "ac", true, "bc", false]);
});
