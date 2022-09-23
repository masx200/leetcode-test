class GridMaster {
    #grid: number[][];
    #r2: number;

    #c2: number;
    #row: number;
    #col: number;
    static #directions = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };
    constructor(
        grid: number[][],
        r1: number,
        c1: number,
        r2: number,
        c2: number,
    ) {
        this.#grid = grid;
        this.#row = r1;
        this.#col = c1;
        this.#r2 = r2;
        this.#c2 = c2;
    }
    canMove(direction: string): boolean {
        const row = this.#row;
        const col = this.#col;
        if (Reflect.has(GridMaster.#directions, direction)) {
            const [a, b] = Reflect.get(GridMaster.#directions, direction);
            const value = this.#grid[row + a]?.[col + b];

            return Boolean(value);
        }

        return false;
    }
    move(direction: string): number {
        if (this.canMove(direction)) {
            const row = this.#row;
            const col = this.#col;
            const [a, b] = Reflect.get(GridMaster.#directions, direction);

            [this.#row, this.#col] = [row + a, col + b];

            return this.#grid[this.#row][this.#col];
        }
        return -1;
    }
    isTarget(): boolean {
        return this.#row === this.#r2 && this.#col === this.#c2;
    }
}
export { GridMaster as GridMaster };
