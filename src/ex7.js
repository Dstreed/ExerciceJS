//En partant de l'exercice précédent ecrivez une fonction calc qui prend 3 paramètres: 1 string qui correspondra à l'opérateur arithmétique et 2 nombres sur lesquels on appliquera l'opérateur. La fonction calc devra utiliser les fonctions définies dans l'exercice précédent.

const calc = (op, nb1, nb2) => {
    switch (op) {
        case '+':
            return nb1 + nb2
        // break
        case '-':
            return nb1 - nb2
        //break
        case '*':
            return nb1 * nb2
        //break
        case '/':
            return nb1 / nb2
        //break
    }
}
calc('+', 10, 11)
calc('-', 6, 4)
calc('*', 4, 5)
calc('/', 10, 2)
