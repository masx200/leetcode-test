import { groupBy } from "../deps.ts";

export default function reformat(s: string) {
    if (s.length <= 1) return s;
    const result = groupBy(s, (c) => Number(/\d/g.test(c)));
    let digits = result[1] ?? [];
    let chars = result[0] ?? [];
    const count_number = digits.length;
    const count_chars = s.length - count_number;
    if (Math.abs(count_number - count_chars) > 1) {
        return "";
    }
    if (digits.length < chars.length) {
        [digits, chars] = [chars, digits];
    }
    return digits.map((d, i) => d + (chars[i] ?? "")).join("");
}
