export class PolyNode {
    constructor(
        public coefficient: number = 0,
        public power: number = 0,
        public next: PolyNode | null = null
    ) {}
}
