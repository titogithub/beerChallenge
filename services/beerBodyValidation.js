const isIntArray = (arr) => !arr.some((v) => !Number.isInteger(v));

const isBeerBodyvalid = (body) => {
  if (!body.beers || !body.target) return false;
  if (!isIntArray(body.beers) || !Number.isInteger(body.target)) return false;
  return true;
};

module.exports = isBeerBodyvalid;
