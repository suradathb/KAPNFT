import React from "react";
import { SHA256 } from "crypto-js";

class Hash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      hash: "",
    };
  }

  handleInputChange = (event) => {
    const input = event.target.value;
    const hashValue = SHA256(input).toString();
    this.setState({ input, hash: hashValue });
  };

  render() {
    const { input, hash } = this.state;
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
                1.SHA256 Hash
              </a>
            </div>
            <div
              id="collapseSix"
              className="collapse hide"
              data-parent="#accordion"
            >
              <div className="row">
                <div className="col-sm-12 card-col">
                  <h2>SHA256 Hash</h2>
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
                      onChange={this.handleInputChange}
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
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default Hash;
