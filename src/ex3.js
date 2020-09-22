// Ecrivez une fonction count qui prend comme paramètre un nombre min, un nombre max et un nombre step. L'execution de cette fonction devra afficher sur le terminal tous les nombres de min jusqu'a max avec un interval de step
const count = (min, max, step) => {
    for (let i = min; i < max; i += step) {
        console.log(i)
    }
}
count(2, 10, 2)
