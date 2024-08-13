import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to ='/'><h1>Gym Workout</h1></Link>
      <nav>
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
