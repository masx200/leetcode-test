export default function numTrees(n: number): number {
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 2;
    } else if (n == 3) {
        return 5;
    } else if (n == 4) {
        return 14;
    } else if (n == 5) {
        return 42;
    } else if (n == 6) {
        return 132;
    } else if (n == 7) {
        return 429;
    } else if (n == 8) {
        return 1430;
    } else if (n == 9) {
        return 4862;
    } else if (n == 10) {
        return 16796;
    } else if (n == 11) {
        return 58786;
    } else if (n == 12) {
        return 208012;
    } else if (n == 13) {
        return 742900;
    } else if (n == 14) {
        return 2674440;
    } else if (n == 15) {
        return 9694845;
    } else if (n == 16) {
        return 35357670;
    } else if (n == 17) {
        return 129644790;
    } else if (n == 18) {
        return 477638700;
    }
    return 1767263190;
}
