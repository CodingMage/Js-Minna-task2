let replacedstring = ''
let changecase = ''
let trimedges = ''
let extractstring = ''
let getinitials = ''

const replaceString = (a, b, c) => {
    const d = new RegExp(b, 'g')
    const replaced = a.replace(d, c)
    return replacedstring += replaced

}


const changeCase = (a, b) => {
    if (b === 'upper') {
        // console.log(a.toUpperCase());
        return changecase += a.toUpperCase()

    } else {
        // console.log(a.toLowerCase());
        return changecase += a.toLowerCase()

    }

}


const trimEdges = (a) => {
    // console.log(a.trim());
    return trimedges += a.trim()
}


const extractString = (a, b, c) => {
    if (b == 0 && c == 0) {
        // console.log(a);
        return extractstring += a
    } else {
        const extracted = a.slice(b, c)
        // console.log(extracted);
        return extractstring += extracted

    }
}



const getInitials = (a) => {
    const splited = a.split(' ')
    let initials = '';

    for (let i = 0; i < splited.length; i++) {
        initials += splited[i][0].toUpperCase()

    }
    // console.log(initials);
    return getinitials += initials

}


// DISPLAY RESULTS (added for easy accessibility to result)

replaceString('kehinde', 'e', 'o')
changeCase('love me GEGRe', 'lower')
trimEdges('                jjjjjjjjjjjjjjj                 ')
extractString('javascript is awesome', 4, 13)
getInitials('hello word')

console.log(`replaceString('kehinde', 'e', 'o') ====> ${replacedstring}`);
console.log('                     ');
console.log(`changeCase('love me GEGRe', 'lower') ====> ${changecase}`);
console.log('                     ');
console.log(`trimEdges('                jjjjjjjjjjjjjjj                 ') ====> ${trimedges}`);
console.log('                     ');
console.log(`extractString('javascript is awesome', 4, 13) ====> ${extractstring}`);
console.log('                     ');
console.log(`getInitials('hello word') ====> ${getinitials}`);