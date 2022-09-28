export default function canChange(start: string, target: string): boolean {
    //@ts-ignore
    if (!(start.replaceAll("_", "") === target.replaceAll("_", ""))) {
        return false;
    }
    for (let i = 0, j = 0; i < start.length; ++i) {
        if (start.charAt(i) == "_") continue;
        while (target.charAt(j) == "_") ++j;
        if (i != j && (start.charAt(i) == "L") == i < j) return false;
        ++j;
    }
    return true;
}
