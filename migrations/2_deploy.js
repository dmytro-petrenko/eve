const Token = artifacts.require("EVEToken");

module.exports = async function (deployer) {
  await deployer.deploy(Token, "69000000000000000000000");
};
