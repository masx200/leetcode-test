class GridMaster {
    #row = 0;
    #col = 0;
    #grid: number[][];
    static #directions = { L: [0, -1], R: [0, 1], U: [-1, 0], D: [1, 0] };
    constructor(grid: number[][]) {
        this.#grid = grid;

        grid.forEach((a, i) =>
            a.forEach((v, j) => {
                if (v === -1) {
                    this.#row = i;
                    this.#col = j;
                }
            })
        );
    }
    canMove(direction: string): boolean {
        // console.log("canMove", this.row, this.col, direction);
        const row = this.#row;
        const col = this.#col;
        if (Reflect.has(GridMaster.#directions, direction)) {
            const [a, b] = Reflect.get(GridMaster.#directions, direction);
            const value = this.#grid[row + a]?.[col + b];
            // console.log(a, b, value);
            return Boolean(value);
        }

        return false;
    }
    move(direction: string): void {
        // console.log("Move", this.row, this.col, direction);
        if (this.canMove(direction)) {
            const row = this.#row;
            const col = this.#col;
            const [a, b] = Reflect.get(GridMaster.#directions, direction);
            // console.log(this.row, this.col, direction);
            [this.#row, this.#col] = [row + a, col + b];
            // console.log(this.row, this.col, direction);
            return;
        }
    }
    isTarget(): boolean {
        return this.#grid[this.#row][this.#col] === 2;
    }
}
export { GridMaster as GridMaster };
