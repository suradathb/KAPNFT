import React from "react";
import Web3Service from "./web3.server";


class Transfer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      kmutnbToken: null,
      address: "",
      amount: 0,
    };
  }
 async componentDidMount(){
   await Web3Service.loadWeb3();
   await Web3Service.loadBlockchainData();
  //  console.log(Web3Service.state.kmutnbToken);
    this.setState({
        account:Web3Service.state.account,
        kmutnbToken:Web3Service.state.kmutnbToken
    });
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
                  <div className="col-sm-12 card-col">
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
                  <div className="col-sm-12 card-col">
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
                  <div className="col-sm-12 card-col">
                    <input type="submit" value="Transfer" className="btn btn-success"/>
                    <p><h4>Transfer(address indexed from, address indexed to, uint tokens)</h4>เป็น event ที่ถูกเรียก เมื่อโอนเกิดขึ้น มาตรฐานบังคับให้ใส่ emit Transfer() ในฟังชั่น transfer() และ transferFrom() ด้วย</p>
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
