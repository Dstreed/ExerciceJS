//Ecrivez une fonction isPalindrome qui prend une string en paramètre. Cette fonction retourne true si le paramètre est un palindrome sinon retourne false

const isPalindrome = (string) => {
    return string.split('').reverse().join('') == string
}
isPalindrome('tennet')
isPalindrome('Alyra')
