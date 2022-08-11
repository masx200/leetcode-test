class Trie {
    words = new Set<string>();
    prefixs = new Set<string>();

    insert(word: string): void {
        const { words, prefixs } = this;
        words.add(word);
        let pre = word;
        while (pre) {
            if (prefixs.has(pre)) {
                break;
            }
            prefixs.add(pre);
            pre = pre.slice(0, -1);
        }
    }

    search(word: string): boolean {
        return this.words.has(word);
    }

    startsWith(prefix: string): boolean {
        return this.prefixs.has(prefix);
    }
}
export default Trie;
