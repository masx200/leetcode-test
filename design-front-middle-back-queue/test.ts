import { assertEquals } from "asserts";

import FrontMiddleBackQueue from "./index.ts";

Deno.test("design-front-middle-back-queue", () => {
    const res: Array<number> = [];
    const q: FrontMiddleBackQueue = new FrontMiddleBackQueue();
    q.pushFront(1); // [1]
    q.pushBack(2); // [1, 2]
    q.pushMiddle(3); // [1, 3, 2]
    q.pushMiddle(4); // [1, 4, 3, 2]
    res.push(q.popFront()); // 返回 1 -> [4, 3, 2]
    res.push(q.popMiddle()); // 返回 3 -> [4, 2]
    res.push(q.popMiddle()); // 返回 4 -> [2]
    res.push(q.popBack()); // 返回 2 -> []
    res.push(q.popFront()); // 返回 -1 -> [] （队列为空）
    assertEquals(res, [1, 3, 4, 2, -1]);
});
