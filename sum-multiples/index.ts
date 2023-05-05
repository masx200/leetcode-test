export default sumOfMultiples;
function sumOfMultiples(n: number) {
    return sum(n, 3) + sum(n, 5) + sum(n, 7) -
        sum(n, 21) - sum(n, 35) - sum(n, 15) + sum(n, 105);
}

function sum(n: number, m: number) {
    return ((m + (n - n % m)) * Math.floor(n / m)) / 2;
}
