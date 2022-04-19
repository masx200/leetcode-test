export default function decodeString(s: string): string {
    if (s.includes("[")) {
        const d = s.replace(/\d+\[[a-z]+\]/g, (substring) => {
            const [count, encoded_string] = substring.slice(0, -1).split("[");
            return encoded_string.repeat(Number(count));
        });
        return decodeString(d);
    } else {
        return s;
    }
}
