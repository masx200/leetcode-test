export default function longestValidParentheses(s: string): number {
    let maxans = 0;
    const stack = new Array<number>();
    stack.push(-1);
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == "(") {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length === 0) {
                stack.push(i);
            } else {
                maxans = Math.max(maxans, i - stack[stack.length - 1]);
            }
        }
    }
    return maxans;
}
