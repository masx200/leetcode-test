import { assertEquals } from '../deps.ts';
import maxArea from './index.ts';

Deno.test("container-with-most-water", () => {
    const input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    const output = maxArea(input);
    assertEquals(output, 49);

    const input2 = [1, 8, 6, 2, 5, 4, 8, 3, 7, 9];
    const output2 = maxArea(input2);
    assertEquals(output2, 64);

    const input3 = [1, 8, 6, 2, 5, 4, 8, 3, 7, 9, 10];
    const output3 = maxArea(input3);
    assertEquals(output3, 72);
    assertEquals(maxArea([1, 1]), 1);
});
