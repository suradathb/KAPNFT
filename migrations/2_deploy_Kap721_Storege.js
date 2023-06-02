const kap721 = artifacts.require("Kap721");

module.exports = function(deployer) {
  account = "0xEDB04B6aBae9eb8f486767a4D6A433bB28288598";
  deployer.deploy(kap721);
};
