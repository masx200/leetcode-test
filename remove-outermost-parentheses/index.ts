export default function removeOuterParentheses(s: string): string {
    let level = 0;
    return Array.prototype.map
        .call(s, (c) => {
            if (c === ")") {
                level--;
            }

            try {
                return level ? c : "";
            } finally {
                if (c === "(") {
                    level++;
                }
            }
        })
        .join("");
}
