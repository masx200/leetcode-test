export default function ProductOfNumbers() {
    const numbers: number[] = [];
    return {
        add(num: number): void {
            numbers.push(num);
        },

        getProduct(k: number): number {
            let result = 1;
            for (const value of numbers.slice(-k)) {
                if (value === 0) return 0;
                result *= value;
            }
            return result;
        },
    };
}
