import Web3 from "web3";
import KmutnbToken from "../abis/KmutnbToken.json";
import kap721 from "../abis/Kap721.json";

class Web3Service {
  constructor() {
    this.web3 = null;
    this.state = {
      account: "",
      kmutnbToken: null,
      erc721Token:null,
    };
  }

  async loadWeb3() {
    if (window.web3) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      this.listenForAccountChanges();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
    this.web3 = window.web3;
  }

  listenForAccountChanges() {
    window.ethereum.on("accountsChanged", (accounts) => {
      this.state.account = accounts[0];
      this.loadBlockchainData();
    });
  }

  async loadBlockchainData() {
    if (this.web3) {
      const accounts = await this.web3.eth.getAccounts();
      this.state.account = accounts[0];
      const networkId = await this.web3.eth.net.getId();
      const networkData = KmutnbToken.networks[networkId];
      const abi = KmutnbToken.abi;
      const address = networkData.address;
      const kmutnbToken = new this.web3.eth.Contract(abi, address);
      this.state.kmutnbToken = kmutnbToken;
    }
  }
  async loadERC721() {
    if (this.web3) {
      const accounts = await this.web3.eth.getAccounts();
      this.state.account = accounts[0];
      const network721Id = await this.web3.eth.net.getId();
      const networkData = kap721.networks[network721Id];
      const erc721abi = kap721.abi;
      const addresserc721 = networkData.address;
      const kap721Load = new this.web3.eth.Contract(erc721abi, addresserc721);
      this.state.erc721Token = kap721Load;
    }
  }
}

const web3Service = new Web3Service();
export default web3Service;
