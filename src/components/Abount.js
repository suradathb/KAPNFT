import React from "react";
import "./Abount.css";

class Abount extends React.Component {
  render() {
    return (
      <>
        {/* <!-- Start Banner --> */}
        <div class="section inner_page_banner">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="banner_title">
                  <h3>Standard ERC20</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Banner --> */}
        <div class="section layout_padding about_bg">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div class="full paddding_left_15">
                  <div class="heading_main text_align_left">
                    <h2>ERC20 Protocol</h2>
                  </div>
                </div>
                <div class="full paddding_left_15">
                  <p>
                    มาตรฐานในแง่ของ solidity คือ Smart Contract เราต้องมี
                    function ตามที่กำหนด โดยมี function 6 ตัว และมี event 2 ตัว
                    ดังนี้
                  </p>
                <pre className=" language-javascript">
                <code className=" language-javascript">
                <span className="token keyword">class</span>
                <span className="token class-name"> EssayFrom</span>
                  </code>
                </pre>
                  
                </div>
                <div class="full paddding_left_15">
                  <a class="main_bt" href="#">
                    Read More >
                  </a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="full text_align_right_img">
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
