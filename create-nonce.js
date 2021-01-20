// see https://github.com/reZach/secure-electron-template/issues/14#issuecomment-622208731
// This generates a random nonce
// it uses ascii instead of base 64, as sometimes base 64 can contain non-ascii chars,
// which give error in app console
const { v4: uuidv4 } = require("uuid");

module.exports = function () {
  return new Buffer.from(uuidv4().toString("ascii"), "ascii");
};
