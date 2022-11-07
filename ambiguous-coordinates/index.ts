export default function ambiguousCoordinates(s: string): string[] {
    s = s.slice(1, -1);
    const res: string[] = [];
    const n = s.length;
    for (let l = 1; l < n; ++l) {
        const lt = getPos(s.slice(0, l));
        const rt = getPos(s.slice(l));
        if ([lt, rt].every((a) => a.length)) {
            res.push(...(lt.map((a) => rt.map((v) => `(${a}, ${v})`))).flat());
        }
    }
    return res;
}

function getPos(s: string): string[] {
    const pos: string[] = [];
    if (s[0] !== "0" || "0" === s) {
        pos.push(s);
    }
    for (let p = 1; p < s.length; ++p) {
        if ((p !== 1 && s[0] === "0") || s[s.length - 1] === "0") {
            continue;
        }
        pos.push(s.slice(0, p) + "." + s.slice(p));
    }
    return pos;
}
