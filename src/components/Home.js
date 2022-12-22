import React from "react";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    return (
      <>
        <div className="ulockd-home-slider">
          <div className="container-fluid">
            <div className="row">
              <div className="pogoSlider" id="js-main-slider">
                <div
                  className="pogoSlider-slide pogoSlider-img"
                //   style={{background-image:"url(images/slide_img.png)"}}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="slide_text white_fonts">
                          <h3>
                            Progress & Success
                            <br />
                            <strong>Currency</strong>
                          </h3>
                          <br />
                          <a className="start_exchange_bt" href="exchange.html">
                            Start Exchange 
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="pogoSlider-slide pogoSlider-img"
                //   style={background-image:url("images/slide_img.png")}
                >
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="slide_text white_fonts">
                          <h3>
                            Progress & Success
                            <br />
                            <strong>Currency</strong>
                          </h3>
                          <br />
                          <a className="start_exchange_bt" href="exchange.html">
                            Start Exchange 
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- .pogoSlider --> */}
            </div>
          </div>
        </div>
        {/* <!-- section --> */}
    <div class="section">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="full text_align_right_img">
                        <img src="../currency-exchange/images/img1.png" alt="#" />
                    </div>
                </div>
                <div class="col-md-6 layout_padding">
                    <div class="full paddding_left_15">
                        <div class="heading_main text_align_left">
						   <h2><span class="theme_color">Welcome</span> To Exchange</h2>	
                        </div>
                    </div>
                    <div class="full paddding_left_15">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div class="full paddding_left_15">
                        <a class="main_bt" href="#">About more</a>
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

export default Home;
