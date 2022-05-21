class AllOne {
    #count_to_strings: Record<string | number, Set<string> | undefined> = {};

    #string_to_count = new Map<string, number>();
    inc(key: string): void {
        const count = this.#string_to_count.get(key) || 0;
        if (this.#string_to_count.has(key) && count) {
            this.#string_to_count.set(key, count + 1);
        } else {
            this.#string_to_count.set(key, 1);
        }
        this.#count_to_strings[count]?.delete(key);
        let set = this.#count_to_strings[count + 1];
        if (!set) {
            set = new Set<string>();
            this.#count_to_strings[count + 1] = set;
        }
        set.add(key);
        if (this.#count_to_strings[count]?.size === 0) {
            Reflect.deleteProperty(this.#count_to_strings, count);
        }
    }

    dec(key: string): void {
        const count = this.#string_to_count.get(key) || 0;
        if (count === 0) {
            return;
        }
        if (this.#string_to_count.has(key) && count) {
            this.#string_to_count.set(key, count - 1);
        }
        if (count === 1) this.#string_to_count.delete(key);

        this.#count_to_strings[count]?.delete(key);
        if (count - 1 > 0) {
            let set = this.#count_to_strings[count - 1];
            if (!set) {
                set = new Set<string>();
                this.#count_to_strings[count - 1] = set;
            }
            set.add(key);
        }
        if (this.#count_to_strings[count]?.size === 0) {
            Reflect.deleteProperty(this.#count_to_strings, count);
        }
    }

    getMaxKey(): string {
        const num = Object.keys(this.#count_to_strings).at(-1);
        if (typeof num === "undefined") return "";
        const set = this.#count_to_strings[num];
        if (set) {
            for (const key of set) {
                return key;
            }
        }
        return "";
    }

    getMinKey(): string {
        const num = Object.keys(this.#count_to_strings).at(0);
        if (typeof num === "undefined") return "";
        const set = this.#count_to_strings[num];

        if (set) {
            for (const key of set) {
                return key;
            }
        }

        return "";
    }
}
export default AllOne;
/**
 * Your AllOne object will be instantiated and called as such:
 * var obj = new AllOne()
 * obj.inc(key)
 * obj.dec(key)
 * var param_3 = obj.getMaxKey()
 * var param_4 = obj.getMinKey()
 */
