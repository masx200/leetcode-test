class Encrypter {
    #key_to_value = new Map<string, string>();
    // #value_to_key = new Map<string, Set<string>>();
    #in_to_out = new Map<string, string>();
    #out_to_in = new Map<string, Set<string>>();
    #dictionary: Set<string>;
    constructor(keys: string[], values: string[], dictionary: string[]) {
        this.#dictionary = new Set(dictionary);
        for (let i = 0; i < keys.length; i++) {
            this.#key_to_value.set(keys[i], values[i]);

            // let set = this.#value_to_key.get(values[i]);
            // if (!set) {
            //     set = new Set<string>();
            //     this.#value_to_key.set(values[i], set);
            // }
            // set.add(keys[i]);
        }

        for (const word of dictionary) {
            try {
                const encoded = this.encrypt(word);
                let set = this.#out_to_in.get(encoded);
                if (!set) {
                    set = new Set<string>();
                    this.#out_to_in.set(encoded, set);
                }
                set.add(word);
            } catch {
                continue;
            }
        }
    }

    encrypt(word1: string): string {
        const cached = this.#in_to_out.get(word1);
        //   console.log(word1)
        if (cached) return cached;
        const res = word1
            .split("")
            .map((w) => {
                const value = this.#key_to_value.get(w);
                if (!value) {
                    throw new Error("unknown key");
                }
                return value;
            })
            .join("");
        this.#in_to_out.set(word1, res);
        return res;
    }

    decrypt(word2: string): number {
        const wordinput = this.#out_to_in.get(word2);
        // console.log(word2,wordinput)
        return wordinput
            ? [...wordinput].filter((w) => this.#dictionary.has(w)).length
            : 0;
        //内存溢出
        /*  let strings: string[] = [];
        for (
            let i = 0, j = 1;
            i < word2.length && j < word2.length;
            i += 2, j += 2
        ) {
            const value = word2[i] + word2[j];
            const keys = [...(this.#value_to_key.get(value) || [])];
            if (keys.length === 0) {
                // throw new Error("unknown value");
                return 0;
            }
            const temp: string[] = keys
                .map((k) => (strings.length ? strings.map((s) => s + k) : k))
                .flat();
            strings = temp;
        }
        return strings.filter((w) => this.#dictionary.has(w)).length; */
    }
}

/**
 * Your Encrypter object will be instantiated and called as such:
 * var obj = new Encrypter(keys, values, dictionary)
 * var param_1 = obj.encrypt(word1)
 * var param_2 = obj.decrypt(word2)
 */
export default Encrypter;
