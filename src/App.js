import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import KmutnbToken from "./abis/KmutnbToken.json";
import Web3 from "web3";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReadContract from "./components/ReadContract";
import WriteContract from "./components/WriteContract";

class App extends React.Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }
  async loadWeb3() {
    if (window.web3) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async loadBlockchainData() {
    if (window.web3) {
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      const networkId = await web3.eth.net.getId();
      const networkData = KmutnbToken.networks[networkId];
      // console.log(accounts[0],networkId,networkData);
      const abi = KmutnbToken.abi;
      const address = networkData.address;
      const kmutnbToken = new web3.eth.Contract(abi,address);
      this.setState({kmutnbToken : kmutnbToken});
      const balance = await kmutnbToken.methods.balanceOf(accounts[0]).call({from:accounts[0]});
      const total = await kmutnbToken.methods.totalSupply().call({from:accounts[0]});
      const name = await kmutnbToken.methods.name().call({from:accounts[0]});
      this.setState({
        balanceOf:balance,
        totalSupply:total,
        SName: name,
      });
      console.log(kmutnbToken);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      account : "",
      kmutnbToken : "",
      balanceOf:0,
      totalSupply:0,
      SName:""
    };
  }
  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }
  render() {
    return (
      <>
        <Header/>
        <Routes>
          <Route path="/" element={<ReadContract/>} />
          <Route path="/write" element={<WriteContract/>} />
        </Routes>
        <Footer/>
      </>
    );
  }
}

export default App;
