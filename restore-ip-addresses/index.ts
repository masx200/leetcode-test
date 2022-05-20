export default function restoreIpAddresses(s: string): string[] {
    if (
        s.length === 12 &&
        (Number(s[0]) >= 3 ||
            Number(s[3]) >= 3 ||
            Number(s[6]) >= 3 ||
            Number(s[9]) >= 3)
    ) {
        return [];
    }
    if (s.length < 4 || s.length > 12) return [];
    if (s.length === 4) return [s.split("").join(".")];
    const res: string[] = [];
    dfs(s, [], (r) => res.push(r));
    return res;
}
function dfs(s: string, address: number[], output: (r: string) => void) {
    if (s.length === 0) {
        if (address.length === 4) output(address.join("."));
        else {
            return;
        }
    }

    if (s.length > 3 * (4 - address.length) || s.length < 4 - address.length) {
        return;
    }

    if (s.startsWith("0")) {
        dfs(s.slice(1), [...address, 0], output);
        return;
    }

    if (s.startsWith("1")) {
        dfs(s.slice(1), [...address, 1], output);
        if (s.length >= 2) {
            dfs(s.slice(2), [...address, Number(s.slice(0, 2))], output);
        }
        if (s.length >= 3) {
            dfs(s.slice(3), [...address, Number(s.slice(0, 3))], output);
        }
        return;
    }

    for (const len of [1, 2, 3]) {
        if (s.length >= len) {
            const num = Number(s.slice(0, len));
            if (0 <= num && num <= 255) {
                dfs(s.slice(len), [...address, num], output);
            }
        }
    }
}
