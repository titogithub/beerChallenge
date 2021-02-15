const isBeerBodyValid = require('../../../services/beerBodyValidation');
const beerService = require('../../../services/beerService');

exports.findTwoBeers = async (event, context, callback) => {
  const data = JSON.parse(event.body);

  if (!isBeerBodyValid(data)) {
    return callback(null, {
      statusCode: 400,
      body: JSON.stringify({
        message: 'body not valid',
      }),
    });
  }

  const { beers, target } = data;

  const index = beerService.findTwoBeers(beers, target);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      index,
    }),
  };

  callback(null, response);
};
