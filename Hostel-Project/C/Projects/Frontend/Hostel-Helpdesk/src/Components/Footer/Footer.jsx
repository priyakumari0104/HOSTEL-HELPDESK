import React from 'react';
import './Footer.css';
import logo from '../../assets/logo2.jpg'; // replace with your uploaded logo path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <p className="footer-quote">
          Hostel Helpdesk is a student-friendly platform to report, manage, and resolve hostel issues quickly and efficiently.<br />
          <span>Your comfort is our priority — report, relax, and we’ll handle the rest.</span>
        </p>
      </div>

      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo} alt="Hostel Helpdesk Logo" />
          <h3>Hostel-Helpdesk</h3>
        </div>

        <div className="footer-contact">
          <p>📍 Shipra Hostel, JNU New Delhi</p>
          <p>📞 987-654-3210</p>
          <p>✉️ hostelwarden07@gmail.com</p>
        </div>

        <div className="footer-social">
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Hostel Helpdesk | Designed by Priya, Kiritka, Zangskit</p>
      </div>
    </footer>
  );
};

export default Footer;
