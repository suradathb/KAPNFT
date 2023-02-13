import React from "react";
import "./Abount.css";

class Abount extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Start Banner --> */}
        <div className="section inner_page_banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="banner_title">
                  <h3>Standard ERC20</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Banner --> */}
        <div className="section layout_padding about_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="full paddding_left_15">
                  <div className="heading_main text_align_left">
                    <h2>ERC20 Protocol</h2>
                  </div>
                </div>
                <div className="full paddding_left_15">
                  <p>
                    มาตรฐานในแง่ของ solidity คือ Smart Contract เราต้องมี
                    function ตามที่กำหนด โดยมี function 6 ตัว และมี event 2 ตัว
                    ดังนี้
                  </p>
                  <pre>
                    {`
                units{
                  "noether": "0",
                  "wei": "1",
                  "kwei": "1000",
                  "Kwei": "1000",
                  "babbage": "1000",
                  "femtoether": "1000",
                  "mwei": "1000000",
                  "Mwei": "1000000",
                  "lovelace": "1000000",
                  "picoether": "1000000",
                  "gwei": "1000000000",
                  "Gwei": "1000000000",
                  "shannon": "1000000000",
                  "nanoether": "1000000000",
                  "nano": "1000000000",
                  "szabo": "1000000000000",
                  "microether": "1000000000000",
                  "micro": "1000000000000",
                  "finney": "1000000000000000",
                  "milliether": "1000000000000000",
                  "milli": "1000000000000000",
                  "ether": "1000000000000000000",
                  "kether": "1000000000000000000000",
                  "grand": "1000000000000000000000",
                  "mether": "1000000000000000000000000",
                  "gether": "1000000000000000000000000000",
                  "tether": "1000000000000000000000000000000"
                }
                
                `}
                  </pre>
                </div>
                <div className="full paddding_left_15">
                  <a className="main_bt" href="#">
                    Read More 
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="full text_align_right_img">
                  <img src="images/img3.png" alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end section --> */}
      </>
    );
  }
}

export default Abount;
