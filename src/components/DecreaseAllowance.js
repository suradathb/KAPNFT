import React from "react";
import Web3Service from "./web3.server";

class DecreaseAllowance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      spender: "",
      subtracted: 0,
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
  createDecreaseAllowance() {
    // console.log(this.state.address)
    this.state.kmutnbToken.methods
      .decreaseAllowance(this.state.spender,this.state.subtracted)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        console.log("BurnSusess", this.state.account, ":", this.state.subtracted);
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
            this.createDecreaseAllowance(this.state);
          }}
        >
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
                      name="subtracted"
                      value={this.state.subtracted}
                      onChange={(event) => {
                        this.setState({ subtracted: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                  <input
                      type="submit"
                      value="DecreaseAllowance"
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

export default DecreaseAllowance;
