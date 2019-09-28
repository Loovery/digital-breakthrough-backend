const os = require('os');

// something to print ip wherever
module.exports = function printIp() {
  const ifaces = os.networkInterfaces();

  Object.keys(ifaces).forEach((ifname) => {
    let alias = 0;

    ifaces[ifname].forEach((iface) => {
      if (iface.family !== 'IPv4' || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        // eslint-disable-next-line no-console
        console.log(`${ifname}:${alias}`, iface.address);
      } else {
        // this interface has only one ipv4 adress
        // eslint-disable-next-line no-console
        console.log(ifname, iface.address);
      }
      alias += 1;
    });
  });
};
