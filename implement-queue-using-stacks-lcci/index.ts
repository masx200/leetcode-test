// deno-lint-ignore no-explicit-any
class MyQueue<T = any> {
    #inStack: Array<T> = [];
    #outStack: Array<T> = [];
    push(value: T): void {
        this.#inStack.push(value);
    }

    pop(): number | T {
        if (!this.#outStack.length) {
            if (!this.#inStack.length) {
                return -1;
            }
            this.#in2out();
        }
        return this.#outStack.pop() as T;
    }
    #in2out() {
        while (this.#inStack.length) {
            this.#outStack.push(this.#inStack.pop() as T);
        }
    }
    peek(): T | number {
        if (!this.#outStack.length) {
            if (!this.#inStack.length) {
                return -1;
            }
            this.#in2out();
        }
        return this.#outStack[this.#outStack.length - 1] as T;
    }

    empty(): boolean {
        if (!this.#outStack.length) {
            if (!this.#inStack.length) {
                return true;
            }
        }
        return false;
    }
}
export default MyQueue;
