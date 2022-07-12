import { assertEquals } from "../deps.ts";
import MedianFinder from "./index.ts";

Deno.test("find-median-from-data-stream", () => {
    const medianFinder = new MedianFinder();

    medianFinder.addNum(1);
    medianFinder.addNum(2);
    assertEquals(medianFinder.findMedian(), 1.5);
    medianFinder.addNum(3);
    assertEquals(medianFinder.findMedian(), 2);
});
