const hasMoreVowels_arrow = (str) => {return (str.match(/[aeiou]/gi) || []).length > (str.length / 2) ? true : false}


const vowels = ["a", "e", "i", "o", "u"]

function hasMoreVowels_func (str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    } if (count > str.length) {
        return true;
    } else {
        return false;
    }
}


function hasMoreVowels_foo (str) {
    let strg = str.toLowerCase();
    const vow = Array.from(strg).reduce((count, letter) => count + vowels.join('').includes(letter), 0);
    if (vow > str.length / 2) {
        return true;
    } else {
        return false;
    }
}


function hasMoreVowels_fuunc (str) {
    const vow = Array.from(str).filter(char => vowels.includes(char.toLowerCase()))
    if (vow > str.length / 2) {
        return true;
    } else {
        return false;
    }
}