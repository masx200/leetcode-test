export default function modifyString(s: string): string {
    return s.includes("?")
        ? modifyString(
            Array.prototype.map
                .call(s, (c, i, a) =>
                    c === "?"
                        ? a[i + 1] === "?" ? c : ["a", "b", "c"].filter(
                            (v) =>
                                v !== a[i + 1] && v !== a[i - 1],
                        )[0]
                        : c)
                .join(""),
        )
        : s;
}
