const { expect } = require('@jest/globals');
const beerService = require('../services/beerService');

describe('Beer Service Test', () => {
  test('Test with empty array', () => {
    const solution = beerService.findTwoBeers([], 10);
    const isArray = solution instanceof Object;
    expect(isArray).toBeTruthy();
    expect(solution.length).toBe(0);
  });

  test('Test with valid array', () => {
    const expected = [0, 2];
    const beers = [10, 15, 20];
    const target = 30;
    const solution = beerService.findTwoBeers(beers, target);
    const isArray = solution instanceof Object;
    expect(isArray).toBeTruthy();
    expect(solution).toEqual(expect.arrayContaining(expected));
  });
});
