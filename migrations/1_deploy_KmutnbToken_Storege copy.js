const kmutnbToken = artifacts.require("KmutnbToken");

module.exports = function(deployer) {
  // account = "0xE935a4C890a1D1B8b1F9aFC83eA96b65792e2736";
  account = "0xEDB04B6aBae9eb8f486767a4D6A433bB28288598";
  deployer.deploy(kmutnbToken, account);
};
