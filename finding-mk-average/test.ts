import MKAverage from "./index.ts";
import { assertEquals } from "asserts";

Deno.test("finding-mk-average", () => {
    const obj = new MKAverage(3, 1);
    obj.addElement(3); // 当前元素为 [3]
    obj.addElement(1); // 当前元素为 [3,1]
    assertEquals(-1, obj.calculateMKAverage()); // 返回 -1 ，因为 m = 3 ，但数据流中只有 2 个元素
    obj.addElement(10); // 当前元素为 [3,1,10]
    assertEquals(3, obj.calculateMKAverage()); // 最后 3 个元素为 [3,1,10]
    // 删除最小以及最大的 1 个元素后，容器为 [3]
    // [3] 的平均值等于 3/1 = 3 ，故返回 3
    obj.addElement(5); // 当前元素为 [3,1,10,5]
    obj.addElement(5); // 当前元素为 [3,1,10,5,5]
    obj.addElement(5); // 当前元素为 [3,1,10,5,5,5]
    assertEquals(5, obj.calculateMKAverage()); // 最后 3 个元素为 [5,5,5]
    // 删除最小以及最大的 1 个元素后，容器为 [5]
    // [5] 的平均值等于 5/1 = 5 ，故返回 5
});
