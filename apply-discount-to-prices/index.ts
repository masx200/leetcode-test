export default function discountPrices(
    sentence: string,
    discount: number,
): string {
    return sentence.split(" ").map((s) => {
        if (!s.startsWith("$")) return s;
        if (s.length === 1) return s;
        const num = Number(s.slice(1));
        if (Number.isNaN(num)) return s;

        return "$" + (num * (1 - discount / 100)).toFixed(2);
    }).join(" ");
}
