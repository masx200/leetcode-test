import { assertEquals } from "../deps.ts";
import LFUCache from "./index.ts";

Deno.test("lfu-cache-2", () => {
    // cnt(x) = 键 x 的使用计数
    // cache=[] 将显示最后一次使用的顺序（最左边的元素是最近的）
    const lfu = new LFUCache(3);

    lfu.put(2, 2); // cache=[2,1], cnt(2)=1, cnt(1)=1
    lfu.put(1, 1); // cache=[1,_], cnt(1)=1
    assertEquals(2, lfu.get(2)); // 返回 1
    assertEquals(1, lfu.get(1)); // 返回 1
    assertEquals(2, lfu.get(2)); // 返回 1
    // cache=[1,2], cnt(2)=1, cnt(1)=2
    lfu.put(3, 3); // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小
    lfu.put(4, 4); // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小
    // cache=[3,1], cnt(3)=1, cnt(1)=2

    assertEquals(-1, lfu.get(3)); // 返回 3
    // cache=[3,1], cnt(3)=2, cnt(1)=2
    assertEquals(2, lfu.get(2)); // 返回 -1（未找到）

    // cache=[4,3], cnt(4)=1, cnt(3)=2
    assertEquals(1, lfu.get(1)); // 返回 -1（未找到）

    // cache=[3,4], cnt(4)=1, cnt(3)=3
    assertEquals(4, lfu.get(4)); // 返回 4
    // cache=[3,4], cnt(4)=2, cnt(3)=3
});
Deno.test("lfu-cache-1", () => {
    // cnt(x) = 键 x 的使用计数
    // cache=[] 将显示最后一次使用的顺序（最左边的元素是最近的）
    const lfu = new LFUCache(2);
    lfu.put(1, 1); // cache=[1,_], cnt(1)=1
    lfu.put(2, 2); // cache=[2,1], cnt(2)=1, cnt(1)=1
    assertEquals(1, lfu.get(1)); // 返回 1
    // cache=[1,2], cnt(2)=1, cnt(1)=2
    lfu.put(3, 3); // 去除键 2 ，因为 cnt(2)=1 ，使用计数最小
    // cache=[3,1], cnt(3)=1, cnt(1)=2
    assertEquals(-1, lfu.get(2)); // 返回 -1（未找到）
    assertEquals(3, lfu.get(3)); // 返回 3
    // cache=[3,1], cnt(3)=2, cnt(1)=2
    lfu.put(4, 4); // 去除键 1 ，1 和 3 的 cnt 相同，但 1 最久未使用
    // cache=[4,3], cnt(4)=1, cnt(3)=2
    assertEquals(-1, lfu.get(1)); // 返回 -1（未找到）
    assertEquals(3, lfu.get(3)); // 返回 3
    // cache=[3,4], cnt(4)=1, cnt(3)=3
    assertEquals(4, lfu.get(4)); // 返回 4
    // cache=[3,4], cnt(4)=2, cnt(3)=3
});

Deno.test("lfu-cache-3", () => {
    // cnt(x) = 键 x 的使用计数
    // cache=[] 将显示最后一次使用的顺序（最左边的元素是最近的）
    const lfu = new LFUCache(0);
    lfu.put(0, 0); // cache=[1,_], cnt(1)=1

    assertEquals(-1, lfu.get(0)); // 返回 1
    // cache=[1,2], cnt(2)=1, cnt(1)=2

    // cache=[3,4], cnt(4)=2, cnt(3)=3
});
