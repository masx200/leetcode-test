export default function halvesAreAlike(s: string): boolean {
    const set = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

    const cnt =
        [...s.slice(0, s.length / 2)].filter((element) => set.has(element))
            .length;
    return (
        cnt ===
            [...s.slice(s.length / 2)].filter((element) => set.has(element))
                .length
    );
}
