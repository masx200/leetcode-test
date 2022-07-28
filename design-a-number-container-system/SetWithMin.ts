import { Computed } from "./Computed.ts";

export class SetWithMin extends Set<number> {
    #first = new Computed(() => (this.size ? Math.min(...this) : -1));
    min() {
        return this.#first.value;
    }
    add(value: number) {
        this.#first.trigger();
        return super.add(value);
    }
    delete(value: number): boolean {
        this.#first.trigger();
        return super.delete(value);
    }
}
