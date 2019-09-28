require('module-alias/register');

// const axios = require('axios');
// const querystring = require('querystring');

const { to } = require('await-to-js');
// eslint-disable-next-line import/no-unresolved,node/no-missing-require
const { JetcalcServer } = require('@db/models');


const jetcalcAuth = async (username, password, jetcalcServerId) => {
  const [err, jetcalcData] = await to(JetcalcServer.findOne({ _id: jetcalcServerId }));

  if (err) throw new Error(err);

  // eslint-disable-next-line no-console
  console.log(jetcalcData);

  // const body = {
  //   username, // Заменить на данные из базы
  //   password, // Заменить на данные из базы
  //   alienDevice: false,
  // };

  // const [connectErr, auth] = await axios.post(`http://${jetcalcData.domainname}/api/modules/login/bypassword`, querystring.stringify(body));

  // if (connectErr) throw new Error(connectErr);

  return {};
};

module.exports = jetcalcAuth;
