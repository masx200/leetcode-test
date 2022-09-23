export class CustomFunction {
    #num: number;
    constructor(x: number) {
        this.#num = x;
    }
    f(x: number, y: number): number {
        switch (this.#num) {
            case 1:
                return x + y;
            case 2:
                return x * y;
            case 3:
                return x * x + y;
            case 4:
                return x + y * y;
            case 5:
                return x * x + y * y;
            case 6:
                return (x + y) * (x + y);
            case 7:
                return x * x * x + y * y * y;
            case 8:
                return x * x * y;
            case 9:
                return x * y * y;
        }
        return 0;
    }
}
