function checkIfPangram(sentence: string): boolean {
    return 26 === new Set(sentence).size;
}
export default checkIfPangram;
