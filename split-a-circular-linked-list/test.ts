import { ArrayToCircularLinkedList } from "./ArrayToCircularLinkedList.ts";
import { CircularLinkedListToArray } from "./CircularLinkedListToArray.ts";
import { assertEquals } from "asserts";
import splitCircularLinkedList from "./index.ts";
Deno.test("split-a-circular-linked-list", () => {
    const input = [1, 5, 7];
    const output = [[1, 5], [7]];

    assertEquals(
        splitCircularLinkedList(ArrayToCircularLinkedList(input)).map((list) =>
            CircularLinkedListToArray(list)
        ),
        output,
    );
});
Deno.test("split-a-circular-linked-list", () => {
    const input = [2, 6, 1, 5];
    const output = [[2, 6], [1, 5]];

    assertEquals(
        splitCircularLinkedList(ArrayToCircularLinkedList(input)).map((list) =>
            CircularLinkedListToArray(list)
        ),
        output,
    );
});
