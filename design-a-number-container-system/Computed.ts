export class Computed<T> {
    #refresh() {
        this.#cached = this.#getter();

        this.#dirty = false;
    }
    #cached: T;
    #dirty = false;
    #getter: () => T;
    trigger() {
        this.#dirty = true;
    }
    get value(): T {
        if (this.#dirty) {
            this.#refresh();
        }

        return this.#cached;
    }
    constructor(getter: () => T) {
        this.#getter = getter;
        this.#cached = this.#getter();
    }
}
