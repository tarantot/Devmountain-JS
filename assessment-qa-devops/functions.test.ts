const {bots, playerRecord} = require('./data');
const {shuffleArray} = require('./utils');
const max = 5;

let shuffled = shuffleArray(bots);
let choices = shuffled.slice(0, max);
let choices1 = shuffled.slice(0, max);

describe('shuffleArray should', () => {
    expect(Array.isArray(choices)).toBe(true);
    expect(choices).toHaveLength(max);
    expect(choices.sort()).toEqual(choices1.sort());
    expect(choices).toEqual(
        expect.arrayContaining([
          expect.objectContaining({id: 0}),
          expect.objectContaining({id: 1}),
          expect.objectContaining({id: 2}),
          expect.objectContaining({id: 3}),
          expect.objectContaining({id: 4})
        ])
      );
})