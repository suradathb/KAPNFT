import React from "react";
import { Link } from "react-router-dom";
import Transfer from "./Transfer";
import TransferFrom from "./TransferFrom";
import Approve from "./Approve";
import Burn from "./Burn";
import BurnFrom from "./BurnFrom";
import DecreaseAllowance from "./DecreaseAllowance";
import IncreaseAllowance from "./IncreaseAllowance";
import "./WriteContract.css";

class WriteContract extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
         {/* <!-- Start Banner --> */}
         <div class="section inner_page_banner">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="banner_title">
                  <h3>KMUTNB ICO Write Contract</h3>
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
                <span className="theme_color">KMUTNB</span> ICO ERC20
              </h2>
            </div>
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
        <div id="accordion">
          <Approve/>
          <Burn/>
          <BurnFrom/>
          <DecreaseAllowance/>
          <IncreaseAllowance/>
          <Transfer/>
          <TransferFrom/>
        </div>
      </>
    );
  }
}

export default WriteContract;
