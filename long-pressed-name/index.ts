export default function isLongPressedName(
    name: string,
    typed: string
): boolean {
    return (
        name === typed ||
        new RegExp(
            "^" + Array.prototype.map.call(name, (c) => c + "+").join("") + "$",
            "g"
        ).test(typed)
    );
}
