import React from "react";
import KmutnbToken from "./abis/KmutnbToken.json";
import Web3 from "web3";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

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
      this.setState({
        balanceOf:balance,
        totalSupply:total
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
      totalSupply:0
    };
  }
  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }
  render() {
    return (
      <>
        <Header/>
        <Home/>
        {/* <div className="App"> */}
        
          <h1>KMUTNB BANK ERC20</h1>
          <h5>
            ทำความรู้จักร ERC20 มาตราฐาน Token และสิ่งที่ต้องเตรียมมีดังนี้ :
          </h5>
          <li style={{ background: "red" }}>
            npx create-react-app ตามด้วยชื่อโปรเจ็ค
          </li>
          <li>Package เสริมที่จำเป็นต้องใช้ในโปรเจ็ค</li>
          <li>
            เรียนรู้วิธี Setup config ต่างๆเพื่อเตรียมใช้ smart contract กัน
          </li>
          <li>BalanceOf : {this.currencyFormat(this.state.balanceOf)}</li>
          <li>TotalSupply : {this.currencyFormat(this.state.totalSupply)}</li>
        {/* </div> */}
        <Footer/>
      </>
    );
  }
}

export default App;
