function repeatedSubstringPattern(s: string): boolean {
    // 匹配有1次以上重复字符串的s
    return /^(\w+)(\1)+$/.test(s);
}
export default repeatedSubstringPattern;
