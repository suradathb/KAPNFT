import React from "react";
import Web3Service from "./web3.server";

class AwardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      erc721Token: null,
      address: "",
      tokenURI: "",
      id_card : "",
      id_name : "",
      id_Cord:"",
      getTokenURI:""
    };
  }
  async componentDidMount() {
    await Web3Service.loadWeb3();
    await Web3Service.loadERC721();
    const getTokenURI = await Web3Service.state.erc721Token.methods.tokenURI(0).call({ from: Web3Service.state.account });
    //  console.log(Web3Service.state.kmutnbToken);
    this.setState({
      account: Web3Service.state.account,
      erc721Token: Web3Service.state.erc721Token,
      getTokenURI:getTokenURI,
    });

    this.getDataSorce();
  }
  currencyFormat(num) {
    return Intl.NumberFormat().format(num);
  }
  createMintECert() {
    var TokenURI = this.state.id_card + "," + this.state.id_name + "," + this.state.id_Cord;
    // console.log(this.state.address)
    // console.log(arrsplit)
    this.state.erc721Token.methods
      .awardItem(this.state.address, TokenURI)
      .send({ from: this.state.account })
      .once("receipt", (receipt) => {
        console.log("Mint Success", this.state.account, ":", TokenURI);
        window.location.reload();
      });
  }
  getDataSorce(){
    var splitData = this.state.getTokenURI.split(",");
    this.setState({
      id_card:splitData[0],
      id_name:splitData[1],
      id_Cord:splitData[2],
    })
  }
  render() {
    return (
      <>
        <form
          role="form"
          onSubmit={(event) => {
            event.preventDefault();
            this.createMintECert(this.state);
          }}
        >
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseSix"
              >
                1.AwardItem(player,tokenURI)
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
                      placeholder="Address (address)"
                      name="Address"
                      value={this.state.address}
                      onChange={(event) => {
                        this.setState({ address: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-6 card-col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ID Card (String)"
                      name="ID Card"
                      value={this.state.id_card}
                      onChange={(event) => {
                        this.setState({ id_card: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-6 card-col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="FullName (String)"
                      name="id_name"
                      value={this.state.id_name}
                      onChange={(event) => {
                        this.setState({ id_name: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-6 card-col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Cord ID (String)"
                      name="id_cord"
                      value={this.state.id_Cord}
                      onChange={(event) => {
                        this.setState({ id_Cord: event.target.value });
                      }}
                    />
                  </div>
                  <div className="col-sm-12 card-col">
                    <input
                      type="submit"
                      value="Transact"
                      className="btn btn-success"
                    />
                    <p>
                      <h4>
                        Mint(address player, String tokenURI)
                      </h4>
                      เป็น event ที่ถูกเรียก เมื่อต้องการสร้าง NFT และให้กับ Addres  ของผู้ใช้งานที่ต้องการ E Certificate
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

export default AwardItem;