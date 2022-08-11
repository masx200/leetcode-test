class Encrypter {
    #key_to_value = new Map<string, string>();
    #in_to_out = new Map<string, string>();
    #out_to_in = new Map<string, Set<string>>();
    #dictionary: Set<string>;
    constructor(keys: string[], values: string[], dictionary: string[]) {
        this.#dictionary = new Set(dictionary);
        for (let i = 0; i < keys.length; i++) {
            this.#key_to_value.set(keys[i], values[i]);
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
        return wordinput
            ? [...wordinput].filter((w) => this.#dictionary.has(w)).length
            : 0;
    }
}

export default Encrypter;
