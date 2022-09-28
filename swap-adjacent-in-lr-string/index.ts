export default function canTransform(start: string, target: string): boolean {
    //@ts-ignore
    if (!(start.replaceAll("X", "") === target.replaceAll("X", ""))) {
        return false;
    }
    for (let i = 0, j = 0; i < start.length; ++i) {
        if (start.charAt(i) == "X") continue;
        while (target.charAt(j) == "X") ++j;
        if (i != j && (start.charAt(i) == "L") == i < j) return false;
        ++j;
    }
    return true;
}
