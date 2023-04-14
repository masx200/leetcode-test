function camelMatch(queries: string[], pattern: string): boolean[] {

    const reg=new RegExp(`^[a-z]*${pattern.split('').map(v=>v+'[a-z]*').join('')}$`)

    return queries.map(v=>reg.test(v))

}

export  default camelMatch
