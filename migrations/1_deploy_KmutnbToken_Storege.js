const kmutnbToken = artifacts.require("KmutnbToken");

module.exports = function(deployer) {
  account = "0x9E2F602cAFBd872202bd4099246c6725939Fe8c7";
  deployer.deploy(kmutnbToken, account);
};
