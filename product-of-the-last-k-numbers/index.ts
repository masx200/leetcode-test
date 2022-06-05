export default function ProductOfNumbers() {
    const array = [1];

    return {
        add(num: number): void {
            if (num === 0) {
                array[0] = 1;
                array.length = 1;
            } else {
                array.push(num * array[array.length - 1]);
            }
        },

        getProduct(k: number): number {
            if (k > array.length - 1) return 0;
            return array[array.length - 1] / array[array.length - 1 - k];
        },
    };
}
