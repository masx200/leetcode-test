function areDeeplyEqual(e: any, t: any): boolean {
    return "number" == typeof e ? e === t : Boolean(e) === Boolean(t) &&
        (!(
            Boolean(e) !== Boolean(t) ||
            typeof e != typeof t ||
            !Object.is(e, t)
        ) ||
            //@ts-ignore
            (toString.call(e) === toString.call(t) && e?.length === t?.length &&
                Object.keys(e).length === Object.keys(t).length &&
                Object.keys(e).every((o) => areDeeplyEqual(e[o], t[o]))));
}
export default areDeeplyEqual;
