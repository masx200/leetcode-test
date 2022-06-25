export default class TextEditor {
    constructor() {}
    left = "";
    right = "";
    position = 0;

    get length() {
        return this.left.length + this.right.length;
    }
    get(index: number) {
        if (index < this.left.length) {
            return this.left[index];
        }
        return this.right[index - this.left.length];
    }
    slice(start = 0, end: number = this.length): string {
        start = Math.max(0, start);
        end = Math.min(end, this.length);
        return Array(end - start)
            .fill("")
            .map((_, i) => this.get(i + start))
            .join("");
    }
    addText(text: string): void {
        if (this.position === this.left.length) {
            this.left += text;
            this.position = this.left.length;
        } else {
            this.right = this.slice(this.position, this.length);
            this.left = this.slice(0, this.position) + text;
            this.position = this.left.length;
        }
    }

    deleteText(k: number): number {
        if (this.position === this.left.length) {
            const count = Math.min(k, this.left.length);
            const end = Math.max(0, this.left.length - k);
            this.left = this.left.slice(0, end);
            this.position = this.left.length;
            return count;
        } else {
            const count = Math.min(k, this.position);
            this.right = this.slice(this.position, this.length);
            const end = Math.max(0, this.position - k);
            this.left = this.slice(0, end);
            this.position = this.left.length;
            return count;
        }
    }

    cursorLeft(k: number): string {
        this.position = Math.max(0, this.position - k);

        return this.read_left_ten();
    }

    read_left_ten(): string {
        return this.slice(Math.max(0, this.position - 10), this.position);
    }

    cursorRight(k: number): string {
        this.position = Math.min(this.length, this.position + k);
        return this.read_left_ten();
    }
}
