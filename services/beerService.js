const initMatrix = (maxRow, maxColum) => {
  const matrix = [];
  for (let index = 0; index <= maxRow; index++) {
    if (index === 0) {
      matrix.push([...Array(maxColum + 1)].map((_, i) => 0));
    } else {
      matrix.push([0]);
    }
  }
  return matrix;
};

const findSolution = (benefitMatrix, beers, count = 2) => {
  const solution = [];
  let findedSolutions = count;
  let weight = benefitMatrix[0].length - 1;
  for (let beer = benefitMatrix.length - 1; beer > 0; beer--) {
    for (; weight > 0; weight--) {
      if (benefitMatrix[beer][weight] !== benefitMatrix[beer - 1][weight]) {
        solution.push(beers[beer - 1]);
        findedSolutions--;
        if (!findedSolutions) return solution;
        weight = benefitMatrix[beer][weight] - beers[beer - 1];
      }
      break;
    }
  }
  return solution;
};

const findTwoBeers = (beers, target) => {
  const benefitMatrix = initMatrix(beers.length, target);
  const orderedBeers = [...beers].sort((a, b) => a - b);

  for (let x = 1; x < benefitMatrix.length; x++) {
    const beer = orderedBeers[x - 1];
    for (let weight = 1; weight < benefitMatrix[0].length; weight++) {
      if (weight < beer) {
        benefitMatrix[x][weight] = benefitMatrix[x - 1][weight];
      } else {
        if (
          beer + benefitMatrix[x - 1][weight - beer] >
          benefitMatrix[x - 1][weight]
        ) {
          benefitMatrix[x][weight] = beer + benefitMatrix[x - 1][weight - beer];
        } else {
          benefitMatrix[x][weight] = benefitMatrix[x - 1][weight];
        }
      }
    }
  }

  const beerValues = findSolution(benefitMatrix, orderedBeers);
  const beerIndex = beerValues.map((v) => {
    const index = beers.indexOf(v);
    beers[beers.indexOf(v)] = null;
    return index;
  });
  return beerIndex;
};

module.exports = {
  findTwoBeers,
};
