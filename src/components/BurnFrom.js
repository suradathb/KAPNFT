import React from "react";
import Web3Service from "./web3.server";

class BurnFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      address: "",
      amount: 0,
    };
  }

  async componentDidMount() {
    await Web3Service.loadWeb3();
    await Web3Service.loadBlockchainData();
    // console.log(Web3Service.state.kmutnbToken);
    this.setState({
      account: Web3Service.state.account,
      kmutnbToken: Web3Service.state.kmutnbToken,
    });
  }
  createBurnFrom() {
    // console.log(this.state.address)
    this.state.kmutnbToken.methods
      .burnFrom(this.state.address, this.state.amount)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        console.log("BurnSusess", this.state.account, ":", this.state.amount);
        window.location.reload();
      });
  }
  render() {
    return (
      <>
        <form
          role="form"
          onSubmit={(event) => {
            event.preventDefault();
            this.createBurnFrom(this.state);
          }}
        >
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseTree"
              >
                3.BurnFrom(address,uint256)
              </a>
            </div>
            <div
              id="collapseTree"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div class="card-body">
                <div className="row">
                  <div className="col-sm-12 card-col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="account (address)"
                      name="address"
                      value={this.state.address}
                      onChange={(event) => {
                        this.setState({ address: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="amount (uint256)"
                      name="amount"
                      value={this.state.amount}
                      onChange={(event) => {
                        this.setState({ amount: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="submit"
                      value="BurnFrom"
                      className="btn btn-success"
                    />
                    <p>
                      <h4>BurnFrom(address,uint256)</h4> address ของผู้อนุมัติ
                      Approve ให้วงเงินจากเช็คที่รับ จะสามารถ BurnFrom
                      ได้จากฟังชั่นนี้
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default BurnFrom;
