// deno-lint-ignore no-explicit-any
export default function CQueue<T = any>(): {
    appendTail: (value: T) => void;
    deleteHead: () => T | number;
} {
    const inStack: Array<T> = [];
    const outStack: Array<T> = [];
    function deleteHead(): T | number {
        if (!outStack.length) {
            if (!inStack.length) {
                return -1;
            }
            in2out();
        }
        return outStack.pop() as T;
    }
    function appendTail(value: T): void {
        inStack.push(value);
    }
    function in2out() {
        while (inStack.length) {
            outStack.push(inStack.pop() as T);
        }
    }
    return { appendTail, deleteHead };
}
