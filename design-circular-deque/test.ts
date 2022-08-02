import { assertEquals } from "../deps.ts";
import MyCircularDeque from "./index.ts";

Deno.test("design-circular-deque", () => {
    const circularDeque: MyCircularDeque = MyCircularDeque(3); // 设置容量大小为3
    assertEquals(true, circularDeque.insertLast(1)); // 返回 true
    assertEquals(true, circularDeque.insertLast(2)); // 返回 true
    assertEquals(true, circularDeque.insertFront(3)); // 返回 true
    assertEquals(false, circularDeque.insertFront(4)); // 已经满了，返回 false
    assertEquals(2, circularDeque.getRear()); // 返回 2
    assertEquals(true, circularDeque.isFull()); // 返回 true
    assertEquals(true, circularDeque.deleteLast()); // 返回 true
    assertEquals(true, circularDeque.insertFront(4)); // 返回 true
    assertEquals(4, circularDeque.getFront()); // 返回 4
});
