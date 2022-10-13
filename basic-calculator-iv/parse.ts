import { Poly } from "./Poly.ts";
/**  我们依然使用递归下降法来解决这个问题，文法如下：

exp :=( exp "+"||"-" additive) || additive

additive := (additive "*" factor) || additive

factor := num || "("exp")" || variable(变量)
 */
export function parse(tokens: (string | number)[]): Poly {
    let index = 0;
    // console.log(tokens);
    function expression(): Poly {
        let res = additive();
        while (
            index < tokens.length &&
            (tokens[index] == "+" || tokens[index] == "-")
        ) {
            const op = tokens[index];
            index++;
            const temp = additive();
            // console.log(op);
            if (op == "+") {
                res = res.add(temp);
            } else {
                res = res.sub(temp);
            }
        }
        // console.log("expression", [...res]);
        return res;
    }
    function additive(): Poly {
        let res = factor();
        while (index < tokens.length && tokens[index] == "*") {
            // console.log(tokens[index]);
            index++;
            const fac = factor();
            res = res.mul(fac);
        }
        // console.log("additive", [...res]);
        return res;
    }
    function factor(): Poly {
        let res = new Poly();
        if (index < tokens.length && tokens[index] == "(") {
            // console.log(tokens[index]);
            index++;
            res = expression();
            // console.log(tokens[index]);
            index++;
        } else if (index < tokens.length) {
            if (typeof tokens[index] === "number") {
                const num = Number(tokens[index]);
                res = res.add(new Poly([[[], num]]));
            } else {
                const variable = String(tokens[index]);
                res = res.add(new Poly([[[variable], 1]]));
            }
            index++;
        }
        // console.log("factor", [...res]);
        return res;
    }
    return expression();
}
