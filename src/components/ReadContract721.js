import React from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import Web3Service from "./web3.server";

class ReadContract721 extends React.Component {
  componentDidMount() {
    this.fetchData();
    this.startPolling();
  }

  componentWillUnmount() {
    this.stopPolling();
  }
  fetchData = async () => {
    await Web3Service.loadWeb3();
    await Web3Service.loadBlockchainData();
    if (
      Web3Service.state.erc721Token !== null &&
      Web3Service.state.erc721Token !== undefined
    ) {
      let countnfts = await Web3Service.state.erc721Token.methods
        .countNFTs()
        .call({ from: Web3Service.state.account });
      let symbols = await Web3Service.state.erc721Token.methods
        .symbol()
        .call({ from: Web3Service.state.account });
      const names = await Web3Service.state.erc721Token.methods
        .name()
        .call({ from: Web3Service.state.account });
      const getAllNFTs = await Web3Service.state.erc721Token.methods
        .getAllNFTs()
        .call({ from: Web3Service.state.account });
    //   console.log(getAllNFTs);
      this.setState({
        account: Web3Service.state.account,
        erc721Token: Web3Service.state.erc721Token,
        countNFT: countnfts,
        symbol: symbols,
        name: names,
        getAllNFT: getAllNFTs,
      });
    } else {
      this.setState({
        LoadError: "Fail Load Data CountDows 10Ms.",
      });
      this.startPolling();
    }
  };
  startPolling = () => {
    if (this.state.erc721Token === null) {
      this.pollingInterval = setInterval(this.fetchData, 5000); // Fetch data every 5 seconds (adjust as needed)
    }
  };

  stopPolling = () => {
    clearInterval(this.pollingInterval); // Clear the polling interval
  };
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      erc721Token: null,
      countNFT: 0,
      symbol: "",
      name: "",
      getAllNFT: [],
      LoadError: "",
    };
  }

  render() {
    return (
      <>
        {/* <!-- Start Banner --> */}
=======
import AwardItem from "./AwardItem";
import Web3Service from "./web3.server";

class ReadContract721 extends React.Component {
  async componentDidMount() {}
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
>>>>>>> 8b33904789fef39077bfa5d69eb03dbb2866b92b
        <div className="section inner_page_banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner_title">
<<<<<<< HEAD
                  <h3>KMUTNB ICO Read Contract</h3>
=======
                  <h3>NFT Read Contract</h3>
>>>>>>> 8b33904789fef39077bfa5d69eb03dbb2866b92b
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Banner --> */}
<<<<<<< HEAD
        <form className="col-md-12">
          <div className="row">
            <div className="full paddding_left_15">
              <div className="heading_main text_align_left">
                <h2>
                  <span className="theme_color">KMUTNB</span>NFT ERC721
                </h2>
              </div>
            </div>
            <div className="col col-link">
              <Link className="link" to="/721">
                Read Contract
              </Link>
              <Link className="link" to="/write721">
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
                  <td>countNFTs()</td>
                  <td>จำนวน NFTs ทั้งหมดที่มีการ Mint เข้าสู่ระบบ</td>
                  <td>{this.state.countNFT}</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Symbol()</td>
                  <td>หน่วยย่อของเหรียญ NFT</td>
                  <td>{this.state.symbol}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Name()</td>
                  <td>หน่วยของเหรียญ NFT</td>
                  <td>{this.state.name}</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>getAllNFTs()</td>
                  <td>NFT ข้อมูลที่ถูกบันทึกเข้าสู่ระบบทั้งหมด</td>
                  <td>
                    
                  </td>
                </tr>
              </tbody>
            </table>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Number</th>
                  <th scope="col">เลขบัตรประชาชน</th>
                  <th scope="col">ชื่อ-สกุล ผู้รับใบรังรอง</th>
                  <th scope="col">ชื่อ code เรียน</th>
                </tr>
              </thead>
              <tbody>
                {this.state.getAllNFT.map((valueall,key) => {
                  let number = key + 1;
                  let splitData = valueall.tokenURI.split(",");
                  return (
                    <tr key={valueall.tokenId}>
                      <td>{number}</td>
                      <td>{splitData[0]}</td>
                      <td>{splitData[1]}</td>
                      <td>{splitData[2]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </form>
        <div id="accordion">{/* <AwardItem /> */}</div>
=======

        <div className="row">
          <div className="full paddding_left_15">
            <div className="heading_main text_align_left">
              <h2>
                <span className="theme_color">NFT</span> ERC 721
              </h2>
            </div>
          </div>
        </div>
        <div className="col col-link">
          <Link className="link" to="/read721">
            Read Contract
          </Link>
          <Link className="link" to="/721">
            write Contract
          </Link>
        </div>
        <div id="accordion">
          <AwardItem />
        </div>
>>>>>>> 8b33904789fef39077bfa5d69eb03dbb2866b92b
      </>
    );
  }
}

export default ReadContract721;
