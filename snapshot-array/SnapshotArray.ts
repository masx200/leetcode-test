class SnapshotArray {
    private snap_cnt: number;
    private data: number[][][];

    constructor(length: number) {
        this.snap_cnt = 0;
        this.data = Array.from({ length }, () => []);
    }

    set(index: number, val: number): void {
        this.data[index].push([this.snap_cnt, val]);
    }

    snap(): number {
        return this.snap_cnt++;
    }

    get(index: number, snap_id: number): number {
        const idx = this.binarySearch(index, snap_id);
        if (idx === 0) {
            return 0;
        }
        return this.data[index][idx - 1][1];
    }

    private binarySearch(index: number, snap_id: number): number {
        let low = 0, high = this.data[index].length;
        while (low < high) {
            const mid = low + Math.floor((high - low) / 2);
            const [x, y] = this.data[index][mid];
            if (x > snap_id + 1 || (x === snap_id + 1 && y >= 0)) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
}
export { SnapshotArray };
