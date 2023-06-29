import React from "react";
import { SHA256 } from "crypto-js";
import "./Block.css";

class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      hash: "",
      block: 1,
      nonce: 23152,
      color: "",
      previewColor: "antiquewhite",
    };
  }

  // handleInputChange = (event) => {
  //   const input = event.target.value;
  //   const hashValue = SHA256(input).toString();
  //   this.setState({ input, hash: hashValue });
  // };
  handleButtonClick = () => {
    const { block, input } = this.state;
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    let nonce = this.state.nonce;
    // console.log(this.state.hash)
    if (this.state.previewColor !== "green") {
      nonce = randomNumber;
    }
    // console.log(randomNumber); // Display the generated random number

    setTimeout(() => {
      const color = "green";
      const hashBlock = {
        block,
        input,
        nonce,
      };
      const hashValue = SHA256(hashBlock).toString();
      this.setState({ previewColor: color, hash: hashValue, nonce });
    }, 2000); // Delay of 2 seconds
  };

  handleInputBlock = (event) => {
    const block = event.target.value;
    const color = "pink";
    const hashValue = SHA256(block).toString();
    this.setState({ previewColor: color, block, hash: hashValue });
  };
  handleInputNonce = (event) => {
    const nonce = event.target.value;
    const color = "pink";
    const hashValue = SHA256(nonce).toString();
    this.setState({ previewColor: color, nonce, hash: hashValue });
  };
  handleInputData = (event) => {
    const input = event.target.value;
    const color = "pink";
    const hashValue = SHA256(input).toString();
    this.setState({ previewColor: color, input, hash: hashValue });
  };

  render() {
    const { input, hash, block, nonce, color, previewColor } = this.state;
    return (
      <>
        <form
          role="form"
          onSubmit={(event) => {
            event.preventDefault();
            this.handleButtonClick(this.state);
          }}
        >
          <div className="card">
            <div className="card-header">
              <a
                className="card-link"
                data-toggle="collapse"
                href="#collapseTwo"
              >
                2.Block
              </a>
            </div>
            <div
              id="collapseTwo"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div className="col-sm-12 card-col">
                <h2>Block</h2>
              </div>
              <div
                className="row preview col-sm-12 card-col"
                style={{ backgroundColor: previewColor }}
              >
                <div className="col-sm-12 card-col">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        Block :{" "}
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      value={block}
                      placeholder="1"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={this.handleInputBlock}
                    />
                  </div>
                </div>
                <div className="col-sm-12 card-col">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        Nonce :{" "}
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      value={nonce}
                      placeholder="23152"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      onChange={this.handleInputNonce}
                    />
                  </div>
                </div>
                <div className="col-sm-12 card-col">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">Data : </span>
                    </div>
                    <textarea
                      class="form-control"
                      aria-label="With textarea"
                      value={input}
                      onChange={this.handleInputData}
                    ></textarea>
                  </div>
                </div>
                <div className="col-sm-12 card-col">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="basic-addon1">
                        Hash :{" "}
                      </span>
                    </div>
                    <input
                      type="text"
                      class="form-control"
                      value={hash}
                      placeholder="e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      disabled
                      readonly
                    />
                  </div>
                </div>
                <div className="col-sm-12 card-col">
                  <div class="input-group mb-3">
                    <input
                      type="submit"
                      value="Mine"
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

export default Block;
