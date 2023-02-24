import React from "react";
import OwnerMint from "./OwnerMint";
import "./Example.css";
import AddOwner from "./AddOwner";

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <>
        <div className="section inner_page_banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner_title">
                  <h3>Example ERC20</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section layout_padding about_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="full paddding_left_15">
                  <div className="heading_main text_align_left">
                    <h2>Example</h2>
                  </div>
                </div>
              </div>
            </div>
            <OwnerMint />
            <AddOwner />
          </div>
        </div>
      </>
    );
  }
}

export default Example;
