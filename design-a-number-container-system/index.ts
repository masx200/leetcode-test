import { SetWithMin } from './SetWithMin.ts';

class NumberContainers {
    #number_to_indices = new Map<number, SetWithMin>();

    #index_to_number = new Map<number, number>();

    constructor() {}

    change(index: number, number: number): void {
        const old = this.#index_to_number.get(index);

        if (this.#index_to_number.has(index) && typeof old === "number") {
            const oldindices = this.#number_to_indices.get(old);
            if (!oldindices) {
                throw Error("old indices not found");
            }
            const oldset = oldindices;

            oldset?.delete(index);

            if (oldset.size === 0) {
                this.#number_to_indices.delete(old);
            }
        }

        this.#index_to_number.set(index, number);

        const indices = this.#number_to_indices.get(number) ?? new SetWithMin();
        this.#number_to_indices.set(number, indices);

        indices.add(index);
    }

    find(number: number): number {
        const indices = this.#number_to_indices.get(number);

        if (this.#number_to_indices.has(number) && indices) {
            return indices.min();
        } else {
            return -1;
        }
    }
}

export default NumberContainers;
