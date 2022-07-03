export default function decodeMessage(key: string, message: string): string {
    const map = new Map<string, string>([[" ", " "]]);
    const raw = "abcdefghijklmnopqrstuvwxyz";
    let index = 0;
    for (const char of key) {
        if (map.has(char)) {
            continue;
        }
        if (key === " ") continue;
        map.set(char, raw[index]);
        index++;
    }
    return Array.prototype.map
        .call(message, (char) => map.get(char) ?? char)
        .join("");
}
