import React from "react";
import Web3Service from "./web3.server";

class IncreaseAllowance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      spender: "",
      addedValue: 0,
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
  createIncreaseAllowance() {
    // console.log(this.state.address)
    this.state.kmutnbToken.methods
      .increaseAllowance(this.state.spender, this.state.addedValue)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        console.log(
          "BurnSusess",
          this.state.account,
          ":",
          this.state.addedValue
        );
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
            this.createIncreaseAllowance(this.state);
          }}
        >
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
                  <div className="col-sm-12 card-col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="spender (address)"
                      name="spender"
                      value={this.state.spender}
                      onChange={(event) => {
                        this.setState({ spender: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="subtractedValue (uint256)"
                      name="addedValue"
                      value={this.state.addedValue}
                      onChange={(event) => {
                        this.setState({ addedValue: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="submit"
                      value="IncreaseAllowance"
                      className="btn btn-success"
                    />
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

export default IncreaseAllowance;
