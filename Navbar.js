import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className={`navbar bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}>
      <h2>formtext{/* {props.name} */}</h2> 

      <Link to = "/"><li className={`text-${props.mode === 'dark'?'white':'black'}`}>Home</li></Link>
      <Link to = "/aboutpage"><li className={`text-${props.mode === 'dark'?'white':'black'}`}>About{props.about}</li></Link>
      
      {/* <li ><a href="/">{props.name}</a></li>  */}
      <div className="form-check form-switch">
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Mode</label>
      </div>
    </nav>

  )
}
Navbar.prototypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}

Navbar.defaultProps = {
  name: "Login",
  abour: "Hello Guys"
}
export default Navbar
