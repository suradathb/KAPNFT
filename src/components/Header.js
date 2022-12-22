import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        <header className="top-header">
          <div className="header_top">
            <div className="container">
              <div className="row">
                <div className="logo_section">
                  <a className="navbar-brand" href="index.html">
                    <img className="logo" src="../currency-exchange/images/kmutnb.jpg" alt="image" />
                  </a>
                </div>
                <div className="site_information">
                  <ul>
                    <li>
                      <a href="mailto:exchang@gmail.com">
                        <img src="../currency-exchange/images/mail_icon.png" alt="#" />
                        exchang@gmail.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:exchang@gmail.com">
                        <img src="../currency-exchange/images/phone_icon.png" alt="#" />
                        +7123569847
                      </a>
                    </li>
                    <li>
                      <a className="join_bt" href="#">
                        Join us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="header_bottom">
            <div className="container">
              <div className="col-sm-12">
                <div
                  className="menu_orange_section"
                  style={{background: "#ff880e"}}
                >
                  <nav className="navbar header-nav navbar-expand-lg">
                    <div className="menu_section">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbar-wd"
                        aria-controls="navbar-wd"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span></span>
                        <span></span>
                        <span></span>
                      </button>
                      <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbar-wd"
                      >
                        <ul className="navbar-nav">
                          <li>
                            <a className="nav-link active" href="index.html">
                              Home
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="about.html">
                              About
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="exchange.html">
                              Exchange
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="services.html">
                              Services
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="new.html">
                              News
                            </a>
                          </li>
                          <li>
                            <a className="nav-link" href="contact.html">
                              Contact
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div className="search-box">
                    <input
                      type="text"
                      className="search-txt"
                      placeholder="Search"
                    />
                    <a className="search-btn">
                      <img src="../currency-exchange/images/search_icon.png" alt="#" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- End header --> */}
      </>
    );
  }
}

export default Header;
