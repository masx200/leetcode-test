function isUnique(astr: string): boolean {
    return new Set(astr).size === astr.length;
}
export default isUnique;
