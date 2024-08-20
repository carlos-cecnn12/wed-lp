import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='row space-between'>
          <div className='logo'>
            <Link to='/'>CARLOS & MARIANA</Link>
          </div>
          <div className='menu'
          style={{
            width:window.innerWidth < 600 ? "60px" : "80px",
            height: window.innerWidth < 600 ? "60px" : "80px"
          }}>
          <Link to='/more'>RSVP</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;