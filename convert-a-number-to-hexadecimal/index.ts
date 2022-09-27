export default function toHex(num: number): string {
    const CONV = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
    ];

    const ans: string[] = [];
    if (num < 0) {
        num += 2 ** 32;
    }
    for (let i = 0; i < 8; i++) {
        ans.push(CONV[num % 16]);
        num = Math.floor(num / 16);
        if (num == 0) {
            break;
        }
    }
    ans.reverse();
    return ans.join("");
}
