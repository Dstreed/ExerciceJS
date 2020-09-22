const makeUnique = (array) => {
    let unique = []
    for (let i = 0; (i = array.length); i += 1) {
        let b = array.shift()
        if (!unique.includes(b)) unique.push(b)
    }
    return unique
}

makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1])
console.log('res', makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))
