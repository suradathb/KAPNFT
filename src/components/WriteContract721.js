import React from "react";
import { Link } from "react-router-dom";
import AwardItem from "./AwardItem";
import Web3Service from "./web3.server";

class WriteContract721 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      erc721Token: null,
      SSymbols: "",
      SName: "",
    };
  }
  async componentDidMount() {
    await Web3Service.loadWeb3();
    await Web3Service.loadERC721();
    // console.log(Web3Service.state.kmutnbToken);
    const symbols = await Web3Service.state.erc721Token.methods
      .symbol()
      .call({ from: Web3Service.state.account });
    const names = await Web3Service.state.erc721Token.methods
      .name()
      .call({ from: Web3Service.state.account });
    this.setState({
      account: Web3Service.state.account,
      erc721Token: Web3Service.state.erc721Token,
      SSymbols: symbols,
      SName: names,
    });
  }
  render() {
    return (
      <>
        <div className="section inner_page_banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner_title">
                  <h3>NFT Write Contract</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="full paddding_left_15">
            <div className="heading_main text_align_left">
              <h2>
                <span className="theme_color">NFT</span> ERC 721 {this.state.SName} : 
                {this.state.SSymbols}
              </h2>
            </div>
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
        <div id="accordion">
          <AwardItem />
        </div>
      </>
    );
  }
}

export default WriteContract721;
