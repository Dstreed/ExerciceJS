//Ecrivez une fonction sortAscend qui prend comme paramètre une liste et classe cette list par ordre croissant.

const sortAscend = (e) => {
    return e.sort((a, b) => {
        return a - b
    })
}
console.log(sortAscend([99, 100, 101, 1]))
