class Trie {
    #words = new Set<string>();
    #prefixs = new Set<string>();

    insert(word: string): void {
        this.#words.add(word);
        let pre = word;
        while (pre) {
            if (this.#prefixs.has(pre)) {
                break;
            }
            this.#prefixs.add(pre);
            pre = pre.slice(0, -1);
        }
    }

    search(word: string): boolean {
        return this.#words.has(word);
    }

    startsWith(prefix: string): boolean {
        return this.#prefixs.has(prefix);
    }
}
export default Trie;
