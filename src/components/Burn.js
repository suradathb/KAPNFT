import React from 'react';
import Web3Service from './web3.server';


class Burn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          account: "",
          kmutnbToken: null,
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
      createBurn() {
        // console.log(this.state.address)
        this.state.kmutnbToken.methods
          .burn(this.state.amount)
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
                this.createBurn(this.state);
              }}
            >
              <div className="card">
                <div className="card-header">
                  <a className="card-link" data-toggle="collapse" href="#collapseTwo">
                  2.Burn(uint256)
                  </a>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse hide"
                  data-parent="#accordion"
                >
                  <div class="card-body">
                    <div className="row">
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
                          value="Burn"
                          className="btn btn-success"
                        />
                        <p><h4>Burn(uint256)</h4> ใช้ฟังชั่นเพื่อ Burn เหรียญจากยอดของ address ที่เข้าใช้งานอยู่</p>
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


export default Burn;