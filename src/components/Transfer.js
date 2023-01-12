import React from "react";
import KmutnbToken from "../abis/KmutnbToken.json";
import Web3 from "web3";

class Transfer extends React.Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }
  async loadWeb3() {
    if (window.web3) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
  async loadBlockchainData() {
    if (window.web3) {
      const web3 = window.web3;
      const accounts = await web3.eth.getAccounts();
      this.setState({ account: accounts[0] });
      const networkId = await web3.eth.net.getId();
      const networkData = KmutnbToken.networks[networkId];
      // console.log(accounts[0],networkId,networkData);
      const abi = KmutnbToken.abi;
      const address = networkData.address;
      const kmutnbToken = new web3.eth.Contract(abi, address);
      this.setState({ kmutnbToken: kmutnbToken });
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: "",
      address: "",
      amount: 0,
    };
  }
  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }
  createTransfer() {
    // console.log(this.state.address)
    this.state.kmutnbToken.methods
      .transfer(this.state.address,this.state.amount)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        console.log("BurnSusess", this.state.account, ":", this.state.amount);
        window.location.reload();
      });
  };
  render() {
    return (
      <>
        <form
          role="form"
          onSubmit={(event) => {
            event.preventDefault();
            this.createTransfer(this.state);
          }}
        >
          <div className="card">
            <div className="card-header">
              <a className="card-link" data-toggle="collapse" href="#collapseSix">
                6.Transfer(to,amount)
              </a>
            </div>
            <div
              id="collapseSix"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="to (address)"
                      name="address"
                      value={this.state.address}
                      onChange={(event) => {
                        this.setState({address : event.target.value});
                      }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="amount (uint256)"
                      name="amount"
                      value={this.state.amount}
                      onChange = {(event) => {
                        this.setState({amount : event.target.value});
                      }}
                    />
                  </div>
                  <div className="col-sm-12">
                    <input type="submit" value="Transfer" className="btn btn-success"/>
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

export default Transfer;
