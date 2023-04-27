class MagicDictionary {
    #map: Map<number, Array<string>>;

    constructor() {
        this.#map = new Map<number, Array<string>>();
    }

    buildDict(dictionary: string[]): void {
        for (const word of dictionary) {
            let list: Array<string>;
            const value = this.#map.get(word.length);
            if (this.#map.has(word.length) && value) {
                list = value;
            } else {
                list = new Array<string>();
            }
            list.push(word);
            this.#map.set(word.length, list);
        }
    }

    search(searchWord: string): boolean {
        const value = this.#map.get(searchWord.length);
        if (this.#map.has(searchWord.length) && value) {
            out:
            for (const word of value) {
                let cnt = 0;
                for (let i = 0; i < word.length; i++) {
                    if (
                        searchWord.charCodeAt(i) !== word.charCodeAt(i) &&
                        ++cnt > 1
                    ) {
                        continue out;
                    }
                }
                if (cnt == 1) {
                    return true;
                }
            }
        }
        return false;
    }
}

export default MagicDictionary;
