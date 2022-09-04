import { assertEquals } from "../deps.ts";
import MedianFinder from "./index.ts";

Deno.test("find-median-from-data-stream-1", () => {
    const medianFinder = new MedianFinder();

    medianFinder.addNum(1);
    medianFinder.addNum(2);
    assertEquals(medianFinder.findMedian(), 1.5);
    medianFinder.addNum(3);
    assertEquals(medianFinder.findMedian(), 2);
});
Deno.test("find-median-from-data-stream-2", () => {
    const medianFinder = new MedianFinder();

    medianFinder.addNum(1);
    medianFinder.addNum(2);
    assertEquals(medianFinder.findMedian(), 1.5);
    medianFinder.addNum(3);
    assertEquals(medianFinder.findMedian(), 2);
    medianFinder.addNum(3);
    assertEquals(medianFinder.findMedian(), 2.5);
});
Deno.test("find-median-from-data-stream-1", () => {
    const medianFinder = new MedianFinder();

    medianFinder.addNum(2);
    assertEquals(medianFinder.findMedian(), 2);
    medianFinder.addNum(3);
    assertEquals(medianFinder.findMedian(), 2.5);
});
Deno.test("find-median-from-data-stream-2", () => {
    const medianFinder = new MedianFinder();

    medianFinder.addNum(12);
    assertEquals(medianFinder.findMedian(), 12);
    medianFinder.addNum(13);
    assertEquals(medianFinder.findMedian(), 12.5);
});
