export default function removeStars(s: string): string {
    const arr: string[] = [];

    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const char = s[i];
        if (char === "*") {
            count++;
        } else {
            if (count) {
                count--;
            } else {
                arr.push(char);
            }
        }
    }
    return arr.reverse().join("");
}
