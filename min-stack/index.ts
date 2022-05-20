export default MinStack;
type MinStack = ReturnType<typeof MinStack>;
function MinStack() {
    const stack = [] as [number, number][];
    return {
        push(x: number): void {
            stack.push([x, Math.min(x, stack.at(-1)?.[1] ?? Infinity)]);
        },
        pop(): void {
            stack.pop();
        },
        top(): number {
            const res = stack.at(-1)?.[0];
            if (typeof res === "undefined") throw Error("empty stack");
            return res;
        },
        getMin(): number {
            const res = stack.at(-1)?.[1];
            if (typeof res === "undefined") throw Error("empty stack");
            return res;
        },
    };
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
