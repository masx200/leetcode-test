export default robotWithString;

function getCodePoint(letter: string): number {
    return (letter.codePointAt(0) ?? 0) - ("a".codePointAt(0) ?? 0);
}

function robotWithString(s: string): string {
    const array: number[] = Array(26).fill(0);
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        array[getCodePoint(s[i])]++;
    }
    let ans = "",
        min = 0;
    for (let i = 0; i < s.length; i++) {
        stack.push(s[i]);
        array[getCodePoint(s[i])]--;
        while (min < 26 && array[min] === 0) min++;
        while (stack.length && getCodePoint(stack[stack.length - 1]) <= min) {
            ans += stack.pop();
        }
    }
    return ans;
}
