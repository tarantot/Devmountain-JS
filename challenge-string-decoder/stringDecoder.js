// In this challenge, you’ll write a decoder function. The function should take in a string and return a string.

// Start by creating a function called decoder that has a single parameter called code.

// Each code will be a sequence of numbers and letters, always starting with a number and ending with a letter(s).

// Each number tells you how many characters to skip before finding a good letter. After each good letter should come the next next number.

// For example, the string ‘hey’ could be encoded to ‘0h2xce5ngbrdy’. This means ‘skip 0, find the ‘h’, skip 2, find the ‘e’, skip 5, find the ‘y’.

// So, if we passed ‘0h2xce5ngbrdy’ into your function, we should get ‘hey’ as a result.

function stringDecoder(string) {
    var string_arr = string.split('');
    var result = '';
    for (element of string_arr) {
        if (Number.isInteger(parseInt(string_arr[i])) === true) {
            result += string_arr[i + parseInt(string_arr[i]) + 1];
        }
    }
    return result;
}


// console.log(stringDecoder('0h2xce5ngbrdy'))
// console.log(stringDecoder('3vdfn'))
// console.log(stringDecoder('0r'))
// console.log(stringDecoder('2bna0p1mp2osl0e'))
// console.log(stringDecoder('0y4akjfe0s'))