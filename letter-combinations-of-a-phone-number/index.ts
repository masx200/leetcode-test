const KEY_MAP: Record<any, string[]> = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
};
export default function letterCombinations(digits: string): string[] {
    if (digits === "") return [];
    //@ts-ignore
    return [...digits] //@ts-ignore
        .reduce(
            (
                //@ts-ignore
                p,
                c, //@ts-ignore 
            ) => p.map(
                (v) =>
                    //@ts-ignore
                    KEY_MAP[c] //@ts-ignore
                        .map((q) => /*@ts-ignore*/ v.map((w) => w + q)) //@ts-ignore
                        .flat(Infinity) as string[], //@ts-ignore
            ),
            [[""]], //@ts-ignore
        ) //@ts-ignore
        .flat(Infinity) as string[];
}
