import React from "react";
import KmutnbToken from "../abis/KmutnbToken.json";
import Web3 from "web3";
import { Link } from "react-router-dom";
import "./ReadContract.css";

class ReadContract extends React.Component {
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
      const kmutnbToken = new web3.eth.Contract(abi, address);
      this.setState({ kmutnbToken: kmutnbToken });
      const balance = await kmutnbToken.methods
        .balanceOf(accounts[0])
        .call({ from: accounts[0] });
      const total = await kmutnbToken.methods
        .totalSupply()
        .call({ from: accounts[0] });
      const name = await kmutnbToken.methods.name().call({ from: accounts[0] });
      const Symbols = await kmutnbToken.methods
        .symbol()
        .call({ from: accounts[0] });
      const decimal = await kmutnbToken.methods
        .decimals()
        .call({ from: accounts[0] });
      this.setState({
        balanceOf: balance,
        totalSupply: total,
        SName: name,
        SSymbols: Symbols,
        decinals: decimal,
      });
      console.log(kmutnbToken);
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: "",
      balanceOf: 0,
      totalSupply: 0,
      SName: "",
      SSymbols: "",
      decinals: 0,
    };
  }
  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }
  render() {
    return (
      <>
        <div className="ulockd-home-slider">
          <div className="container-fluid">
            <div className="row">
              <div className="pogoSlider" id="js-main-slider">
                <div
                  className="pogoSlider-slide pogoSlider-img"
                  //   style={{background-image:"url(images/slide_img.png)"}}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="slide_text white_fonts">
                          <h3>
                            Kmutnb & เหรียญเพื่อทดสอบ
                            <br />
                            <strong>KMUTNB</strong>
                          </h3>
                          <br />
                          <a className="start_exchange_bt" href="exchange.html">
                            Start Exchange
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="pogoSlider-slide pogoSlider-img"
                  //   style={background-image:url("images/slide_img.png")}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="slide_text white_fonts">
                          <h3>
                            Kmutnb & เหรียญเพื่อทดสอบ
                            <br />
                            <strong>KMUTNB</strong>
                          </h3>
                          <br />
                          <a className="start_exchange_bt" href="exchange.html">
                            Start Exchange
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .pogoSlider --> */}
            </div>
          </div>
        </div>

        <form className="col-md-12">
          <div className="row">
            <div className="full paddding_left_15">
              <div className="heading_main text_align_left">
                <h2>
                  <span className="theme_color">KMUTNB</span>ICO ERC20
                </h2>
              </div>
            </div>
            <div className="col col-link">
              <Link className="link" to="/">
                Read Contract
              </Link>
              <Link className="link" to="/write">
                write Contract
              </Link>
            </div>
            <br />
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Methods</th>
                  <th scope="col">Details</th>
                  <th scope="col">Display</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <th scope="row">1</th>
                  <td>allowance(owner,apender)</td>
                  <td>ตรวจสอบยอดเช็ค Token</td>
                  <td>{this.currencyFormat(this.state.balanceOf)}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>BalanceOf(address)</td>
                  <td>จำนวน Token ทั้งหมดที่ address นั้นมี</td>
                  <td>{this.currencyFormat(this.state.balanceOf)}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Decimals()</td>
                  <td>หน่วยทศนิยม Token</td>
                  <td>{this.currencyFormat(this.state.decinals)}</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Name()</td>
                  <td>ชื่อเต็มของ Token </td>
                  <td>{this.state.SName}</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Symbol()</td>
                  <td>ชื่อย่อของ Token </td>
                  <td>{this.state.SSymbols}</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>TotalSupply()</td>
                  <td>จำนวน Token ทั้งหมดในระบบ</td>
                  <td>{this.currencyFormat(this.state.totalSupply)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
      </>
    );
  }
}

export default ReadContract;
