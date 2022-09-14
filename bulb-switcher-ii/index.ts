export default function flipLights(n: number, m: number): number {
    if (!n || !m) return 1;
    else if (n == 1) return 2;
    else if (n == 2) return 3 + Number(m > 1);
    else {
        if (m == 1) return 4;
        else if (m == 2) return 7;
        else return 8;
    }
}
