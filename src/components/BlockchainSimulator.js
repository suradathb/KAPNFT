import React from "react";
import { Link } from "react-router-dom";
import Hash from "./Hash";
import Block from "./Block";

class BlockchainSimulator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blockchain: [],
      inputValue: "",
      blocks: [],
      data: "",
      nonce: 0,
    };
  }

  render() {
    const { inputValue, blockchain } = this.state;

    return (
      <>
        {/* <!-- Start Banner --> */}
        <div className="section inner_page_banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner_title">
                  <h3>KMUTNB ICO Read Contract</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <form className="col-md-12">
          <div className="row">
            <div className="full paddding_left_15">
              <div className="heading_main text_align_left">
                <h2>
                  <span className="theme_color">Blockchain</span> Simulator
                </h2>
              </div>
            </div>
          </div>
        </form>
        <div id="accordion">
          <Hash />
          <Block/>
        </div>
      </>
    );
  }
}

export default BlockchainSimulator;
