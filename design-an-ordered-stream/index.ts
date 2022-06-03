export default  class OrderedStream {
    #store: string[];
    #ptr = 1;
    #n:number
    constructor(n: number) {
        this.#store = Array(0);
        this.#n=n
    }

    insert(idKey: number, value: string): string[] {
        if(idKey>this.#n||idKey<1){
            throw Error('range error')
        }
        this.#store[idKey] = value;
        if (this.#ptr === idKey && Reflect.has(this.#store, idKey)) {
            const res: string[] = [];
            let i = this.#ptr
            for (; Reflect.has(this.#store, i); i++) {
                res.push(this.#store[i]);
            }
            this.#ptr = i ;
            return res;
        }
        return [];
    }
}