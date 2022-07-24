// Write your code below

const hasUniqueChars1 = (word) => !(/^.*?(\w)\1.*?$/).test(word)

const hasUniqueChars2 = (word) => { return word === [...new Set(word)].join('') ? true : false}