class Node {
    constructor(
        public type: "file" | "folder" = "folder",
        public content: string = "",
        public children: Set<string> = new Set(),
    ) {}
}
export { Node };
class FileSystem {
    paths = new Map<string, Node>();
    constructor() {
        this.paths.set("/", new Node("folder"));
    }
    ls(path: string): string[] {
        const node = this.paths.get(path);
        if (node) {
            if (node.type === "file") {
                return [path.split("/").at(-1) ?? ""];
            } else {
                return [...node.children].sort();
            }
        } else {
            return [];
        }
    }
    mkdir(path: string): void {
        if (this.paths.has(path)) return;

        const ps = path.split("/");

        for (let index = 0; index < ps.length - 1; index++) {
            const element = ps[index + 1];
            const sub = ps.slice(0, index + 1).join("/") || "/";

            const node = this.paths.get(sub) ?? new Node("folder");
            this.paths.set(sub, node);

            node.children.add(element);
        }
        this.paths.set(path, new Node("folder"));
    }
    addContentToFile(filePath: string, content: string) {
        if (!this.paths.has(filePath)) {
            this.mkdir(filePath);
        }
        const node = this.paths.get(filePath);
        if (node) {
            node.type = "file";
            node.content += content;
        }
    }
    readContentFromFile(filePath: string): string {
        return this.paths.get(filePath)?.content ?? "";
    }
}
export default FileSystem;
