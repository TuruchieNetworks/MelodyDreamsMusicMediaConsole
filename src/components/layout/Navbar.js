import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to='/Landing'>
          <i className="fas fa-code"></i> Melody Dreams</Link>
      </h1>
      <ul>
        <li><Link to="/Profiles">Artists</Link></li>

        <li><Link to="/Register">Sign Up</Link></li>

        <li><Link to="/Login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar