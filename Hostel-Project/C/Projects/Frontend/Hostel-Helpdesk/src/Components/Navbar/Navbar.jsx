import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Use Link for SPA navigation
import './Navbar.css';
import logo from '../../assets/logo.jpg';

const Navbar = () => {  // ✅ Function wrapper starts here
  const handleLogout = () => {
    alert("Logged out!");
  };

  return (   // ✅ Return inside the function
    <div className='navbar'>
      <img src={logo} alt="Logo" className='logo' />
      
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/fileComplaint">File Complaint</Link></li>
        <li><Link to="/track">Track Complaint</Link></li>
        <li><Link to="/history">Complaint History</Link></li>
      </ul>

      <div className='log-out'>
        <button onClick={handleLogout}>Log-Out</button>
      </div>

      <div className='profile'>
        <Link to="/profile">
          <i className="fa-solid fa-user"></i>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
