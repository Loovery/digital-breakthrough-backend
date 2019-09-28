require('module-alias/register');

const { to } = require('await-to-js');
// eslint-disable-next-line import/no-unresolved,node/no-missing-require
const { JetcalcServer } = require('@db/models');

const saveJetcalcServer = async (data) => {
  const [err, jetcalcServer] = await to(JetcalcServer.create({
    ...data,
  }));

  if (err) throw new Error(err);

  return jetcalcServer;
};

module.exports = saveJetcalcServer;
