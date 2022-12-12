class SnapshotArray {
    #shot: number;
    #map: Map<string, number>;
    constructor(_length: number) {
        this.#shot = 0;
        this.#map = new Map();
    }

    set(index: number, val: number): void {
        this.#map.set(`${this.#shot}-${index}`, val);
    }

    snap(): number {
        return this.#shot++;
    }

    get(index: number, snap_id: number): number {
        for (let i = snap_id; i >= 0; i--) {
            const val = this.#map.get(`${i}-${index}`);
            if (val !== undefined) {
                return val;
            }
        }
        return 0;
    }
}
export default SnapshotArray;
