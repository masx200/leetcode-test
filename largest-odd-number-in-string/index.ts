export default function largestOddNumber(num: string): string {
    let index = -1;
    for (let i = 0; i < num.length; i++) {
        if ((Number(num.charAt(i)) - 0) % 2 != 0) {
            index = i;
        }
    }
    return num.substring(0, index + 1);
}
