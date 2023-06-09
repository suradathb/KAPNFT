import React from "react";
import { Link } from "react-router-dom";
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
        <div className="section inner_page_banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner_title">
                  <h3>NFT Read Contract</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Banner --> */}

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
      </>
    );
  }
}

export default ReadContract721;
