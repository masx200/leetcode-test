export default function squareIsWhite(coordinates: string): boolean {
    return (
        (coordinates[0].charCodeAt(0) + coordinates[1].charCodeAt(0)) % 2 > 0
    );
}
