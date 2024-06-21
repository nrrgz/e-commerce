import React from "react";
import Logo from "../../assets/icons/logo.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div className="footer-about">
          <div className="footer-logo">
            <div className="footer-logo-image">
              <img src={Logo} alt="logo" />
            </div>
            <p>lenny.</p>
          </div>
          <p>The biggest marketplace managed by Ideologist corp, which provides various kinds of daily needs and hobbies.</p>
        </div>
        <div className="footer-links">
          <div className="footer-link">
            <p className="footer-link-title">About Lenny</p>
            <ul>
              <li><a href="#">Information</a></li>
              <li><a href="#">Store Lactor</a></li>
              <li><a href="#">Bulk Purchase</a></li>
              <li><a href="#">Alteration Services</a></li>
              <li><a href="#">Gift Delivery Service</a></li>
              <li><a href="#">Live Station</a></li>
            </ul>
          </div>
          <div className="footer-link">
            <p className="footer-link-title">About Lenny</p>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Return Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Accessibillity</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-link">
            <p className="footer-link-title">Account</p>
            <ul>
              <li><a href="#">Membership</a></li>
              <li><a href="#">Address</a></li>
              <li><a href="#">Cupons</a></li>
            </ul>
          </div>
          <div className="footer-link">
            <p className="footer-link-title">Contact Us</p>
            <ul>
              <li><a href="#">For  Lenny Consumer
                Complaint Services</a></li>
              <li><a href="#">(684) 555-0102 and
                curtis.weaver@example.com</a></li>
              <li><a href="#">Customers Complaint Service</a></li>
              <li><a href="#">Directorate Generate of the
                Republic of Indonesia</a></li>
              <li><a href="#">(480) 555-0103</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>COPYRIGHT &copy; LENNY CO., LTD. ALL RIGHTS RESERVED.</p>
        <div className="footer-copyright">
          <a href="#">Terms of use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;