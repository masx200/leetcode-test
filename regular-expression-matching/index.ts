export default function isMatch(s: string, p: string): boolean {
    //console.log([s, p]);
    if (p === ".*") return true;
    if (p.length === 0) return s.length === 0;
    const first_match = !!s.length && (s[0] === p[0] || p[0] === ".");
    if (p.length >= 2 && p[1] == "*") {
        return (first_match && isMatch(s.slice(1), p)) ||
            isMatch(s, p.slice(2));
    } else {
        return first_match && isMatch(s.slice(1), p.slice(1));
    }
}
