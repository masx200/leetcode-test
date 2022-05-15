interface ParkingSystem {
    addCar(carType: number): boolean;
}
export default ParkingSystem;
/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
function ParkingSystem(
    big: number,
    medium: number,
    small: number,
): ParkingSystem {
    const park = new Map<number, number>();
    park.set(1, big);
    park.set(2, medium);
    park.set(3, small);
    function addCar(carType: number): boolean {
        const full = park.get(carType) === 0;
        if (full) return false;
        else {
            park.set(carType, -1 + (park.get(carType) || 0));
            return true;
        }
    }
    return { addCar };
}
