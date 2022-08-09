import { assertEquals } from "../deps.ts";
import MedianFinder1 from "./index.ts";
import MedianFinder2 from "./MedianFinder.ts";

Deno.test("find-median-from-data-stream-1", () => {
    const medianFinder = new MedianFinder1();

    medianFinder.addNum(1);
    medianFinder.addNum(2);
    assertEquals(medianFinder.findMedian(), 1.5);
    medianFinder.addNum(3);
    assertEquals(medianFinder.findMedian(), 2);
});
Deno.test("find-median-from-data-stream-2", () => {
    const medianFinder = new MedianFinder2();

    medianFinder.addNum(1);
    medianFinder.addNum(2);
    assertEquals(medianFinder.findMedian(), 1.5);
    medianFinder.addNum(3);
    assertEquals(medianFinder.findMedian(), 2);
});
Deno.test("find-median-from-data-stream-1", () => {
    const medianFinder = new MedianFinder1();

    medianFinder.addNum(2);
    assertEquals(medianFinder.findMedian(), 2);
    medianFinder.addNum(3);
    assertEquals(medianFinder.findMedian(), 2.5);
});
Deno.test("find-median-from-data-stream-2", () => {
    const medianFinder = new MedianFinder2();

    medianFinder.addNum(2);
    assertEquals(medianFinder.findMedian(), 2);
    medianFinder.addNum(3);
    assertEquals(medianFinder.findMedian(), 2.5);
});
