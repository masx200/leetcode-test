export default function countStudents(
    students: number[],
    sandwiches: number[],
): number {
    const cnt = Object.assign([0, 0], countBy(students));

    while (true) {
        if (students.length === 0) return 0;

        if (cnt[sandwiches[0]] === 0) {
            return students.length;
        }
        if (students[0] === sandwiches[0]) {
            cnt[students[0]]--;
            students.shift();
            sandwiches.shift();
        } else {
            students.push(students[0]);
            students.shift();
        }
    }
}
import { countBy } from "../deps.ts";
