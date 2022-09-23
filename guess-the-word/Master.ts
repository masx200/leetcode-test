export class Master {
    #__secret: string;
    #__wordset: Set<string>;
    #__guesses: number;
    #__found: boolean;
    constructor(secret: string, wordlist: string[], numguesses: number) {
        this.#__secret = secret;
        this.#__wordset = new Set(wordlist);
        this.#__guesses = numguesses;
        this.#__found = false;
    }
    guess(word: string): number {
        this.#__guesses -= 1;
        if (word == this.#__secret) {
            this.#__found = true;
            return word.length;
        }
        if (!this.#__wordset.has(word)) {
            return -1;
        }
        let matches = 0;
        for (let i = 0; i < word.length; ++i) {
            if (word[i] == this.#__secret[i]) {
                matches += 1;
            }
        }
        return matches;
    }
    getGuesses() {
        return this.#__guesses;
    }
    getFound() {
        return this.#__found;
    }
}
