function checkIfInstanceOf(obj: any, classFunction: any): boolean {
    if (
        obj === null ||
        typeof obj === "undefined" ||
        typeof classFunction !== "function"
    ) {
        return false;
    }
    // try{
    return Object(obj) instanceof classFunction;
    // }catch{return false}
}
export default checkIfInstanceOf;
/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
