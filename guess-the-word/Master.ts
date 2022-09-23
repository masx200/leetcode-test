export class Master {
    #secret: string;
    #wordset: Set<string>;
    #guesses: number;
    #found: boolean;
    constructor(secret: string, wordlist: string[], numguesses: number) {
        this.#secret = secret;
        this.#wordset = new Set(wordlist);
        this.#guesses = numguesses;
        this.#found = false;
    }
    guess(word: string): number {
        this.#guesses -= 1;
        if (word == this.#secret) {
            this.#found = true;
            return word.length;
        }
        if (!this.#wordset.has(word)) {
            return -1;
        }
        let matches = 0;
        for (let i = 0; i < word.length; ++i) {
            if (word[i] == this.#secret[i]) {
                matches += 1;
            }
        }
        return matches;
    }
    getGuesses() {
        return this.#guesses;
    }
    getFound() {
        return this.#found;
    }
}
