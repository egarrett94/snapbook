import React, { Component } from 'react';

class Home extends Component {

	render() {
		return(

				<div className='mobile-screen'>
				   <div className='row hero-row'>
					   <div className='hero center'>
					   		<div className='hero-header'>
						   		<h2>Something clever!</h2>
						   		<h5>Briefly explaining what we do!</h5>
						   		<br/>
						   		<a className='btn-large waves-effect waves-light yellow darken-2 z-depth-3'>Get Started!</a>
						   	</div>
					   </div>
					</div>

					<div className='row opener-boys'> 
						<div className='col s8 offset-s2 m4 center'>
							<i className="material-icons large opener-icons">cloud_upload</i>
							<h5>Upload</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.</p>
						</div>
						<div className='col s8 offset-s2 m4 center info-border'>
							<i className="material-icons large opener-icons">insert_photo</i>
							<h5>Display</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.</p>
						</div>
						<div className='col s8 offset-s2 m4 center info-border'>
							<i className="material-icons large opener-icons">mood</i>
							<h5>Share</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat.</p>
						</div>
					</div>
				</div>
			) 
	}
}


export default Home;