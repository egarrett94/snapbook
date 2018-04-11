import React from 'react';
import { Redirect, Route, Link } from 'react-router-dom';
const Footer = () => {
	return(
		<footer className="page-footer">
	      <div className="footer-copyright">
	        <div className="container center white-text">
	        <Link to='/about' className='white-text'>© 2018 Kyle Van Bergen, Emily Garrett </Link>
	        </div>
	      </div>
	    </footer>
    )
}

export default Footer;