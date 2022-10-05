export default function checkRecord(s: string): boolean {
    return (countBy(s)["A"] ?? 0) < 2 && !s.includes("L".repeat(3));
}
import { countBy } from "../deps.ts";
