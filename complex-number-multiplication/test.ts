import { assertEquals } from '../deps.ts';
import complexNumberMultiply from './index.ts';

Deno.test("complex-number-multiplication", () => {
    const num1 = "1+1i";
    const num2 = "1+1i";
    const expected = "0+2i";
    const actual = complexNumberMultiply(num1, num2);
    assertEquals(actual, expected);

    assertEquals(
        "0+-2i",
        complexNumberMultiply("1+-1i", "1+-1i"),
    );
});
