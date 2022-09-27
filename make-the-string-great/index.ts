export default function makeGood(s: string): string {
    const len = s.length;
    const ret: string[] = [];
    let i = 0;
    while (i < len) {
        if (
            ret.length > 0 &&
            ret[ret.length - 1].toLowerCase() === s.charAt(i).toLowerCase() &&
            ret[ret.length - 1] !== s.charAt(i)
        ) {
            ret.pop();
        } else {
            ret.push(s.charAt(i));
        }
        i += 1;
    }
    return ret.join("");
}
