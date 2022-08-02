import { assertEquals } from "../deps.ts";
import MyCircularQueue from "./index.ts";

Deno.test("design-circular-queue", () => {
    const results = [];
    const circularQueue: MyCircularQueue = MyCircularQueue(3); // 设置长度为 3
    results.push(circularQueue.enQueue(1)); // 返回 true
    results.push(circularQueue.enQueue(2)); // 返回 true
    results.push(circularQueue.enQueue(3)); // 返回 true
    results.push(circularQueue.enQueue(4)); // 返回 false，队列已满
    results.push(circularQueue.Rear()); // 返回 3
    results.push(circularQueue.isFull()); // 返回 true
    results.push(circularQueue.deQueue()); // 返回 true
    results.push(circularQueue.enQueue(4)); // 返回 true
    results.push(circularQueue.Rear()); // 返回 4
    assertEquals(results, [true, true, true, false, 3, true, true, true, 4]);
});
