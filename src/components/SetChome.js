import React from "react";

function SetChome(props) {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <a className="card-link" data-toggle="collapse" href="#collapseThree">
            Chome Metamask
          </a>
        </div>
        <div
          id="collapseThree"
          className="collapse hide"
          data-parent="#accordion"
        >
          <div class="card-body">
            <div className="row">
              <div className="col-md-12">
                <p>
                  <h4>Step 1:</h4>
                </p>
                <p>
                  Go to Chrome Web Store Extensions Section. :{" "}
                  <a
                    className="btn btn-success"
                    href="https://chrome.google.com/webstore/category/extensions"
                  >
                    chrome เว็บสโตร์
                  </a>
                </p>
                <p>
                  <h4>Step 2:</h4>
                </p>
                <p>Search MetaMask. : </p>
                <p>
                  <h4>Step 3:</h4>
                </p>
                <p>
                  Check the number of downloads to make sure that the legitimate
                  MetaMask is being installed, as hackers might try to make
                  clones of it.{" "}
                </p>
                <img src="images/metamask.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SetChome;
