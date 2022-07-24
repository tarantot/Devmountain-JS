// Write your code below

const isPalindrome1 = (word) => word.split('').reverse().join('')

const isPalindrome2 = (word) => word === [...word].reverse().join``

const isPalindrome3 = (word) => [...word].every((char, index) => char === word[word.length - 1 - index]);

const isPalindrome4 = (word) => (i=i || 0) < 0 || i >= word.length >> 1 || word[i] === word[word.length - 1 - i] && checkPalindrome(word, ++i);

const isPalindrome5 = function (word) {
    for (var i = 0; i < word.length/2; i++) {
        if (word[i] !== word[word.length - 1 - i]) { 
            return false;
        } else {
            return true;
        }
    }
}