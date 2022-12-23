function simplifyPath(path: string): string {
    //@ts-ignore
    const res = new URL("f://" + path.replaceAll(/\/+/g, "/"))
        .toString()
        .slice(4)
        .replaceAll(/\/+/g, "/");

    return res.length === 1 ? res : res.endsWith("/") ? res.slice(0, -1) : res;
}
export default simplifyPath;
