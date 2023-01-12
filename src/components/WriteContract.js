import React from "react";
import { Link } from "react-router-dom";
import Transfer from "./Transfer";
import "./WriteContract.css";

class WriteContract extends React.Component {
  constructor(props) {
    super(props);
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
          <div class="card">
            <div class="card-header">
              <a class="card-link" data-toggle="collapse" href="#collapseOne">
                1.Approve(address,uint256)
              </a>
            </div>
            <div
              id="collapseOne"
              class="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="spender (address)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="amount (uint256)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <button type="button" className="btn btn-success">
                    Approve
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a class="card-link" data-toggle="collapse" href="#collapseTwo">
              2.Burn(uint256)
              </a>
            </div>
            <div
              id="collapseTwo"
              class="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="amount (uint256)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <button type="button" className="btn btn-success">
                    Burn
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a class="card-link" data-toggle="collapse" href="#collapseTree">
              3.BurnFrom(address,uint256)
              </a>
            </div>
            <div
              id="collapseTree"
              class="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="account (address)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="amount (uint256)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <button type="button" className="btn btn-success">
                    BurnFrom
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a class="card-link" data-toggle="collapse" href="#collapseFour">
              4.DecreaseAllowance(spender,subtractedValue)
              </a>
            </div>
            <div
              id="collapseFour"
              class="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="spender (address)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="subtractedValue (uint256)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <button type="button" className="btn btn-success">
                    DecreaseAllowance
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="card-header">
              <a class="card-link" data-toggle="collapse" href="#collapseFive">
              5.IncreaseAllowance(spender,addedValue)
              </a>
            </div>
            <div
              id="collapseFive"
              class="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="spender (address)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="addedValue (uint256)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <button type="button" className="btn btn-success">
                    IncreaseAllowance
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="card">
            <div class="card-header">
              <a class="card-link" data-toggle="collapse" href="#collapseSix">
              6.Transfer(to,amount)
              </a>
            </div>
            <div
              id="collapseSix"
              class="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="to (address)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="amount (uint256)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <button type="button" className="btn btn-success">
                    Transfer
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <Transfer/>
          <div class="card">
            <div class="card-header">
              <a class="card-link" data-toggle="collapse" href="#collapseSeven">
              7.TransferFrom(from,to,amount)
              </a>
            </div>
            <div
              id="collapseSeven"
              class="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="from (address)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="to (address)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="amount (uint256)"
                    />
                  </div>
                  <div className="col-sm-12">
                    <button type="button" className="btn btn-success">
                    TransferFrom
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default WriteContract;
