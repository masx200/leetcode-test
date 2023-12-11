import { assertEquals } from "../deps.ts";
import RangeModule from "./index.ts";

const { test } = Deno;
test("RangeModule", () => {
    const rangeModule = new RangeModule();
    rangeModule.addRange(10, 20);
    rangeModule.removeRange(14, 16);
    assertEquals(true, rangeModule.queryRange(10, 14)); //返回 true （区间 [10, 14) 中的每个数都正在被跟踪）
    assertEquals(false, rangeModule.queryRange(13, 15)); //返回 false（未跟踪区间 [13, 15) 中像 14, 14.03, 14.17 这样的数字）
    assertEquals(true, rangeModule.queryRange(16, 17)); //返回 true （尽管执行了删除操作，区间 [16, 17) 中的数字 16 仍然会被跟踪）
});
