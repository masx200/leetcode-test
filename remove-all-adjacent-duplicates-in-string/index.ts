export default function removeDuplicates(s: string): string {
    const stack: string[] = [];
    for (const ch of s) {
        if (stack.length) {
            const last = stack[stack.length - 1];
            if (last === ch) {
                stack.pop();
                continue;
            }
        }
        stack.push(ch);
    }
    return stack.join("");
}
