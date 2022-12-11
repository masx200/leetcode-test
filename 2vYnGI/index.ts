export default function breakfastNumber(
    staple: number[],
    drinks: number[],
    x: number
): number {
    staple.sort((a, b) => a - b);
    drinks.sort((a, b) => a - b);

    let i = 0;
    let j = drinks.length - 1;

    while (drinks[j] >= x) {
        j--;
    }
    let res = 0;
    while (i < staple.length && j >= 0) {
        if (staple[i] >= x) break;

        if (staple[i] + drinks[j] <= x) {
            res += j + 1;
            i++;
        } else {
            j--;
        }
    }
    return res % 1000000007;
}
