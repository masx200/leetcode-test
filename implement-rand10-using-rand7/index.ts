import { rand7 } from "./rand7.ts";

/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
export default function rand10(): number /* : number */ {
    //rand7()-1 from 0 to 6
    //a from 0 to 48
    let a = 7 * (rand7() - 1) + rand7() - 1;

    if (a >= 40) {
        //a from 40 to 48
        //a-40 from 0 to 8
        //a from 0 to 62
        a = (a % 10) * 7 + (rand7() - 1);
        if (a >= 60) {
            //a-60 from 0 to 2
            //a from 0 to 20
            a = (a % 10) * 7 + (rand7() - 1);

            if (a >= 20) {
                //a-20 from 0 to 0
                return rand10();
            } else {
                //a from 0 to 19
                return (a % 10) + 1;
            }
        } else {
            //a from 0 to 59
            return (a % 10) + 1;
        }
    } else {
        //a from 0 to 39
        return (a % 10) + 1;
    }
}
// //0 or 1
// function rand2()/* : number */ {
//     let a=rand7()
// while(a>6){
//     a=rand7()
// }
// return a%2
// };
