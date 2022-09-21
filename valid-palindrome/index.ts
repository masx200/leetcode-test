function isPalindrome(s: string): boolean {
const a=(s.match(/[A-Za-z0-9]+/g)?.join("")??"").toLowerCase()

const mid=Math.floor(a.length/2)
return a.slice(0,mid)===[...a.slice(a.length-mid)].reverse().join("")
}
export default isPalindromedrome