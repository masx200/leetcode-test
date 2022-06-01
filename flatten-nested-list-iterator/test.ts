import { assertEquals } from "../deps.ts";
import NestedIterator from "./index.ts";
import { NestedIntegerFrom } from "./NestedIntegerFrom.ts";

Deno.test("flatten-nested-list-iterator-1", () => {
    const iterator = new NestedIterator([]);
    const res = [];
    while (iterator.hasNext()) res.push(iterator.next());
    assertEquals(res, []);
});
Deno.test("flatten-nested-list-iterator-2", () => {
    const iterator = new NestedIterator(
        NestedIntegerFrom([[1, 1], 2, [1, 1]]).getList(),
    );
    const res = [];
    while (iterator.hasNext()) res.push(iterator.next());
    assertEquals(res, [1, 1, 2, 1, 1]);
});
Deno.test("flatten-nested-list-iterator-3", () => {
    const iterator = new NestedIterator(
        NestedIntegerFrom([1, [4, [6]]]).getList(),
    );
    const res = [];
    while (iterator.hasNext()) res.push(iterator.next());
    assertEquals(res, [1, 4, 6]);
});
