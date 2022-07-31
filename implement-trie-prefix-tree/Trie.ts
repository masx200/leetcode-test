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

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word: string): boolean {
        return this.words.has(word);
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix: string): boolean {
        return this.prefixs.has(prefix);
    }
}
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
export default Trie;
