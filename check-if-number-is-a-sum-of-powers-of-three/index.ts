function checkPowersOfThree(n: number): boolean {
    return Boolean(n == 0 ? 1 : n % 3 < 2 && checkPowersOfThree(n / 3));
}
export default checkPowersOfThree;
