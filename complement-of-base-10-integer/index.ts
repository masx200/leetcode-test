function bitwiseComplement(n: number): number {
    return parseInt(
        n.toString(2).split("").map((a) => a === "0" ? "1" : "0").join(""),
        2,
    );
}
export default bitwiseComplement;
