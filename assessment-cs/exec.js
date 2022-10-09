function checkSum (array, sum) {
    let newSet = new Set()
    for (let i = 0; i < array.length; ++i) {
        let temp = sum - array[i]

        if (newSet.has(temp)) {
            return `Given sum <${sum}> pair is: ${array[i]}, ${temp}`
        }

        newSet.add(array[i])
    }
}

// console.log(checkSum([1, 2, 3, -2], 0))


function hasUniqueChars (string) {
    char_set = new Array(256).fill(false)
    for (let i = 0; i < string.length; i++) {
        value = string.charAt(i)
        if (char_set[value]) {
            return false
        }
        char_set[value] = true
    }

    return true
}

// var testTrue = hasUniqueChars("Monday");
// var testFalse = hasUniqueChars("Moonday");
// console.log(testTrue, testFalse)


function isPangram (string) {
    mark = new Array(26).fill(false)
    let index

    for (let i = 0; i < string.length; i++) {
        if ('A' <= string[i] && string[i] <= 'Z') {
            index = string.charCodeAt(i) - 'A'.charCodeAt(0)
        } else if ('a' <= string[i] && string[i] <= 'z') {
            index = string.charCodeAt(i) - 'a'.charCodeAt(0)
        } else continue

        mark[index] = true
    }

    for (let i = 0; i <= 25; i++) {
        if (mark[i] == false) {
            return false
        }
    }

    return true
}

// var testTrue = isPangram("The quick brown fox jumps over the lazy dog!");
// var testFalse = isPangram("I like cats, but not mice");
// console.log(testTrue, testFalse)


const findLongestWord = (array) => (array.sort((word, nextWord) => nextWord.length - word.length)[0]).length

// console.log(findLongestWord(["hi", "hello"]));