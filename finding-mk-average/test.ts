import MKAverage from "./index.ts";
import { assertEquals } from "asserts";
import { runScript } from "leetcode-class";

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
Deno.test("finding-mk-average", () => {
    assertEquals(
        runScript(
            [
                "MKAverage",
                "addElement",
                "addElement",
                "calculateMKAverage",
                "addElement",
                "addElement",
                "calculateMKAverage",
                "addElement",
                "addElement",
                "calculateMKAverage",
                "addElement",
            ],
            [
                [3, 1],
                [3716],
                [51094],
                [],
                [56724],
                [79619],
                [],
                [99914],
                [277],
                [],
                [91205],
            ],
            MKAverage,
        ),
        [null, null, null, -1, null, null, 56724, null, null, 79619, null],
    );
});
Deno.test("finding-mk-average", () => {
    assertEquals(
        runScript(
            [
                "MKAverage",
                "addElement",
                "addElement",
                "calculateMKAverage",
                "addElement",
                "calculateMKAverage",
                "addElement",
                "addElement",
                "addElement",
                "calculateMKAverage",
            ],
            [[3, 1], [3], [1], [], [10], [], [5], [5], [5], []],
            MKAverage,
        ),
        [null, null, null, -1, null, 3, null, null, null, 5],
    );
});
Deno.test("finding-mk-average", () => {
    assertEquals(
        runScript(
            [
                "MKAverage",
                "addElement",
                "addElement",
                "calculateMKAverage",
                "addElement",
                "addElement",
                "calculateMKAverage",
                "addElement",
                "addElement",
                "calculateMKAverage",
                "addElement",
            ],
            [
                [3, 1],
                [58378],
                [34909],
                [],
                [94574],
                [29985],
                [],
                [77484],
                [13400],
                [],
                [41607],
            ],
            MKAverage,
        ),
        [null, null, null, -1, null, null, 34909, null, null, 29985, null],
    );
});
