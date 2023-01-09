import React from "react";

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-top bg-gray section-pt-90 section-pb">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="footer-widget footer-style-1">
                <h5 class="ft-title">
                  ABOUT <span>US</span>
                </h5>
                <div class="content">
                  <p style={{ textAlign: "justify" }}>
                    The Greencorps was founded in 2005, at a time when a fast
                    moving economy demanded reliable safety and security
                    services. The vision was to provide world class security,
                    investigation and house keeping services to its clients when
                    industrial strife and scarcity of credible and competent
                    professionals were looming large over the business
                    fraternity. The company has since then grown many folds and
                    today is a one stop shop for security, safety and
                    housekeeping solutions. It has operation centres across
                    south India, including major cities like Bangalore, Mysore,
                    Mangalore, Trivandrum and Kochi
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6 col-12">
              <div class="footer-widget footer-style-1 space-left">
                <h5 class="ft-title">
                  CONTACT <span>US</span>
                </h5>
                <div class="content">
                  <p>
                    H B No. 44, South Bridge Avenu Road Panampilly Nagar, Cochin
                    -682 036, Kerala, India
                  </p>
                  <div class="ft-address">
                    <p>0484-2323230</p>
                    <p>8589055501</p>
                    <p>
                      <a href="#">accounsgreencorps@gmail.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6 col-12">
              <div class="footer-widget footer-style-1">
                <div class="content">
                  {/* 
                            <div class="social-share social-square">
                                <a title="facebook" href="#"><i class="fa fa-facebook"></i></a>
                                <a title="twitter" href="#"><i class="fa fa-twitter"></i></a>
                                <a title="google-plus" href="#"><i class="fa fa-google-plus"></i></a>
                                <a title="pinterest" href="#"><i class="fa fa-pinterest"></i></a>
                                <a title="linkedin" href="#"><i class="fa fa-linkedin"></i></a>
                            </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
