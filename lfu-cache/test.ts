import { assertEquals } from "../deps.ts";
import LFUCache from "./index.ts";

Deno.test("lfu-cache-2", () => {
    const lfu = new LFUCache(3);

    lfu.put(2, 2);
    lfu.put(1, 1);
    assertEquals(2, lfu.get(2));
    assertEquals(1, lfu.get(1));
    assertEquals(2, lfu.get(2));

    lfu.put(3, 3);
    lfu.put(4, 4);

    assertEquals(-1, lfu.get(3));

    assertEquals(2, lfu.get(2));

    assertEquals(1, lfu.get(1));

    assertEquals(4, lfu.get(4));
});
Deno.test("lfu-cache-1", () => {
    const lfu = new LFUCache(2);
    lfu.put(1, 1);
    lfu.put(2, 2);
    assertEquals(1, lfu.get(1));

    lfu.put(3, 3);

    assertEquals(-1, lfu.get(2));
    assertEquals(3, lfu.get(3));

    lfu.put(4, 4);

    assertEquals(-1, lfu.get(1));
    assertEquals(3, lfu.get(3));

    assertEquals(4, lfu.get(4));
});

Deno.test("lfu-cache-3", () => {
    const lfu = new LFUCache(0);
    lfu.put(0, 0);

    assertEquals(-1, lfu.get(0));
});
