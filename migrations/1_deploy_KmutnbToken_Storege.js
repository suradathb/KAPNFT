const kmutnbToken = artifacts.require("KmutnbToken");

module.exports = function(deployer) {
  account = "0xE935a4C890a1D1B8b1F9aFC83eA96b65792e2736";
  deployer.deploy(kmutnbToken, account);
};
