export default MinStack;
type MinStack = ReturnType<typeof MinStack>;
function MinStack(): {
    push(x: number): void;
    pop(): void;
    top(): number;
    min(): number;
} {
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
        min(): number {
            const res = stack.at(-1)?.[1];
            if (typeof res === "undefined") throw Error("empty stack");
            return res;
        },
    };
}
