import React from 'react'
import logo from './assest/img/logo.png'
import pic1 from './assest/img/4.jpg'
import pic2 from './assest/img/5.jpg'


const Footer = () => {
  return (
    <>
        <footer className="footer-area">
    <div className="main-footer bg-img bg-overlay section-padding-80-0">
      <div className="container">
        <div className="row">

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-widget mb-80">
              <a href="#" className="foo-logo d-block mb-30"><img src= { logo } alt="" /></a>
              <p>Lorem ipsum dolor sit amet, consecte stare adipiscing elit. In act honcus risus atiner Pellentesque risus.</p>
              
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-widget mb-80">
              <h5 className="widget-title">QUICK LINK</h5>
              <nav className="footer-widget-nav">
                <ul>
                  <li><a href="#">Purchase</a></li>
                  <li><a href="#">Policities</a></li>
                  <li><a href="#">Shipping</a></li>
                  <li><a href="#">FAQs</a></li>
                  <li><a href="#">Return</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Payments</a></li>
                  <li><a href="#">Partners</a></li>
                  <li><a href="#">Guide</a></li>
                  <li><a href="#">Standard</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Brands</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-widget mb-80">
              <h5 className="widget-title">RECENT NEWS</h5>

              <div className="single-recent-blog d-flex align-items-center">
                <div className="post-thumbnail">
                  <img src={pic1} alt="" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-title">WA’s largest farming business on the market</a>
                  <div className="post-date">18 Aug 2018</div>
                </div>
              </div>

              <div className="single-recent-blog d-flex align-items-center">
                <div className="post-thumbnail">
                  <img src={pic2} alt="" />
                </div>
                <div className="post-content">
                  <a href="#" className="post-title">Beef retail prices hit a record</a>
                  <div className="post-date">18 Aug 2018</div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="footer-widget mb-80">
              <h5 className="widget-title">STAY CONNECTED</h5>
              <div className="footer-social-info">
                <div className="contact-info">
                  <p><span>120 Raymond Rd, New York</span></p>
                  <p><span>info.deercreative@gmail.com</span></p>
                  <p><span>+84 223 9000</span></p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div className="copywrite-area">
      <div className="container">
        <div className="copywrite-text">
          <div className="row align-items-center">
            <div className="col-md-6"></div>
            <div className="col-md-6">
              <div className="footer-nav">
                <nav>
                  <ul>
                    
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer
