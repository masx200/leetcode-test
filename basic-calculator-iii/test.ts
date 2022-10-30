import { assertEquals } from '../deps.ts';
import calculate from './index.ts';

Deno.test("basic-calculator-iii", () => {
    assertEquals(calculate("-199+5998"), -199 + 5998);
    assertEquals(calculate("1 + 1"), 2);
    assertEquals(calculate(" 6-4 / 2 "), 4);
    assertEquals(calculate("2*(5+5*2)/3+(6/2+8)"), 21);
    assertEquals(calculate("(2+6* 3+5- (3*14/7+2)*5)+3"), -12);
});
