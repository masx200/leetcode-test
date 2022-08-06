function stringMatching(words: string[]): string[] {

return words.filter(word=>words.find(par=>par.length>word.length&&(par.includes(word))))

}
export default stringMatching
