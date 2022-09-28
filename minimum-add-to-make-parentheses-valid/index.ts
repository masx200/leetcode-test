export default function minAddToMakeValid(s: string): number {
    if (s.includes("()")) {
        //@ts-ignore
        return minAddToMakeValid(s.replaceAll("()", ""));
    }
    return s.length;
}
