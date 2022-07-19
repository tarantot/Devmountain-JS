// Write your code below
function hasUniqueChars(word) {
  let uniqueChars = new Set([])
  for (let i = 0; i < word.length; i++) {
    uniqueChars.add(word[i])
  }
  return uniqueChars.size === word.length
}