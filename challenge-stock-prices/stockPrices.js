const best = prices => {
  let maxDiff = 0
  let lowSoFar

  for (let i = 0; i < prices.length; i++) {
    if (lowSoFar === undefined || prices[i] < lowSoFar) {
      lowSoFar = prices[i]
    }

    let diff = prices[i] - lowSoFar

    if (diff > maxDiff) {
      maxDiff = diff
    }
  }

  return maxDiff
}

// best([1, 2, 3, 4, 5])
// best([2, 3, 10, 6, 4, 8, 1])
// best([5, 4 , 3, 2, 1])