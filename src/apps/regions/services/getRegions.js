require('module-alias/register');

const { to } = require('await-to-js');
// eslint-disable-next-line import/no-unresolved,node/no-missing-require
const { Region } = require('@db/models');

const getRegions = async () => {
  const [err, products] = await to(Region.find());

  if (err) throw new Error(err);

  return products;
};

module.exports = getRegions;
