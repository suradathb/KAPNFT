import React from "react";
import { Link } from "react-router-dom";
import KmutnbToken from "../abis/KmutnbToken.json";
import Web3 from "web3";
import "./Header.css";
class Header extends React.Component {
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
      this.setState({
        balanceOf: balance,
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
    };
  }
  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }
  render() {
    return (
      <>
        <header className="top-header">
          <div className="header_top">
            <div className="container">
              <div className="row">
                <div className="logo_section">
                  <Link className="navbar-brand" to="/">
                    <img
                      className="logo"
                      src="../currency-exchange/images/kmutnb.jpg"
                      alt="image"
                    />
                  </Link>
                </div>
                <div className="site_information-head">
                  <ul>
                    <li className="nav-link-head">
                      <h3>Token : {this.currencyFormat(this.state.balanceOf)} wei</h3>
                    </li>
                  </ul>
                </div>
                {/* <div className="site_information">
                  <ul>
                    <li>
                      <a href="mailto:exchang@gmail.com">
                        <img src="../currency-exchange/images/mail_icon.png" alt="#" />
                        kmutnb@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:exchang@gmail.com">
                        <img src="../currency-exchange/images/phone_icon.png" alt="#" />
                        +7123569847
                      </a>
                    </li>
                    <li>
                      <a className="join_bt" href="#">
                        Join us
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container">
              <div className="col-sm-12">
                <div
                  className="menu_orange_section"
                  style={{ background: "#ff880e" }}
                >
                  <nav className="navbar header-nav navbar-expand-lg">
                    <div className="menu_section">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar-wd"
                        aria-controls="navbar-wd"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbar-wd"
                      >
                        <ul className="navbar-nav">
                          <li>
                            <Link className="nav-link active" to="/">
                              Home
                            </Link>
                          </li>
                          <li>
                            <a className="nav-link" href="about.html">
                              About
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="exchange.html">
                              Exchange
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="services.html">
                              Services
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="new.html">
                              News
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="contact.html">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div class="search-box">
                    <input type="text" class="search-txt" placeholder="Search"/>
                    <a class="search-btn">
                        <img src="../currency-exchange/images/search_icon.png" alt="#" />
                    </a>
                </div> 
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- End header --> */}
      </>
    );
  }
}

export default Header;
