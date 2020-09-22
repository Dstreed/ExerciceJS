//Ecrivez une fonction showStars qui prend en paramètre un nombre nbStars et qui affiche sur le terminal comme suit:

const showStars = (nbStarts) => {
    for (let i = '*'; i.length <= nbStarts; i += '*') {
        console.log(i)
    }
}
showStars(3)

showStars(10)
