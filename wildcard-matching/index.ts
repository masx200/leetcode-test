import { assertEquals } from "https://deno.land/std@0.149.0/testing/asserts.ts";
export default function isMatch(s: string, p: string): boolean {
    console.log(s, p);
    const words = Array.from(p.matchAll(/[a-z]+/g)).map((a) => a[0]);
    if (!words.every((word) => s.includes(word))) return false;
    p = p.replaceAll(/\*+/g, "*");

    const result = dfs(s, p);
    console.log(s, p, result);
    return result;
}
function dfs(s: string, p: string): boolean {
    console.log(s, p);
    if (p === "*") return true;
    if (s === p) return true;
    if (s.length && p.length && p[0] !== "?" && p[0] !== "*" && p[0] !== s[0]) {
        return false;
    }
    if (
        s.length &&
        p.length &&
        p[p.length - 1] !== "?" &&
        p[p.length - 1] !== "*" &&
        p[p.length - 1] !== s[s.length - 1]
    ) {
        return false;
    }
    if (
        p.length &&
        s.length &&
        (p[p.length - 1] === s[s.length - 1] || p[p.length - 1] === "?")
    ) {
        return dfs(s.slice(0, -1), p.slice(0, -1));
    }
    if (p.length && s.length && (p[0] === s[0] || p[0] === "?")) {
        return dfs(s.slice(1), p.slice(1));
    }
    if (p.length && s.length && p[0] === "*") {
        return (
            dfs(s, p.slice(1)) ||
            Array(s.length)
                .fill(0)
                .map((_v, i) => i + 1)
                .some((i) => dfs(s.slice(i), p.slice(1)))
        );
    }
    if (p.length && s.length && p[p.length - 1] === "*") {
        return (
            dfs(s, p.slice(0, -1)) ||
            Array(s.length)
                .fill(0)
                .map((_v, i) => i + 1)
                .some((i) => dfs(s.slice(0, -i), p.slice(0, -1)))
        );
    }
    return false;
}
console.log("simple test");
assertEquals(false, isMatch("aa", "a"));
assertEquals(false, isMatch("cb", "?a"));
assertEquals(true, isMatch("aa", "*"));
assertEquals(true, isMatch("", "******"));

assertEquals(true, isMatch("b", "b"));
assertEquals(true, isMatch("adceb", "*b"));
assertEquals(true, isMatch("dceb", "*b"));
assertEquals(true, isMatch("adceb", "a*b"));
assertEquals(true, isMatch("adceb", "*a*b"));
console.log("hard test");
assertEquals(
    true,
    isMatch(
        "baabbabababaabbabababbaabbbbaaabaaabbbbaaaaaabbbbaaabaaabbbbbabaabbbbbbbbabbbabbabbbbabbbbabbbbbbabababbaaaabbbbaabaaababbbabaaaabaabbbabbaabbabbbbabaababbbbbbbabbaaaabaaabbaaabaaaaababbbaaaabbbbbabbabb",
        "ba*ba*bb*a********abaa*bb**abb**b***ab**b*b*babb***a*bb*aaabb*****b*aabb**aa**b*a***b*bb*b*bb*a*bbbbb**",
    ),
);
assertEquals(
    false,
    isMatch(
        "abbaaababaaaabaaaaabaabbabababbaaabaaabaabaaaabbababaaaabababaabababbbbaabaabbbbbaababbbbbbbbaaababbbabbbbaabbbababbbabababbaabaaabaaabbbbbabaaaababababbbaabbaabbabbbaabbbaabaabaabbaabbbbbabbaabbbaabbb",
        "***a****a***a*bba*a**aba******b**a*a*b***aa***b*ab*ab*aab*ab*b*abbaa***b**a*bb*b*ab*a*abba**bb*****a",
    ),
);
assertEquals(
    false,
    isMatch(
        "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
        "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb",
    ),
);
