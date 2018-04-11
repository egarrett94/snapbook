import React, { Component } from 'react';
import {connect} from 'react-redux'

const mapStateToProps = state => {
	return{ state }
  }

class Home extends Component {
	render() {
		console.log(this.props.state)
		return(
				<div className='mobile-screen'>
				   <div className='row hero-row'>
					   <div className='hero center'>
					   		<div className='hero-header'>
						   		<h2>Share the love.</h2>
						   		<h5>Make your memories magical with our free layouts!</h5>
						   		<br/>
						   		<a className='btn-large waves-effect waves-light z-depth-3 opener-button'>Get Started!</a>
						   	</div>
					   </div>
					</div>

					<div className='row opener-boys'> 
						<div className='col s8 offset-s2 m4 center'>
							<i className="material-icons large opener-icons">cloud_upload</i>
							<h5>Upload</h5>
							<p>Upload your favorite photos and view them whenever you'd like!</p>
						</div>
						<div className='col s8 offset-s2 m4 center info-border'>
							<i className="material-icons large opener-icons">insert_photo</i>
							<h5>Display</h5>
							<p>Use our sweet layouts to display your favorite photos!</p>
						</div>
						<div className='col s8 offset-s2 m4 center info-border'>
							<i className="material-icons large opener-icons">mood</i>
							<h5>Share</h5>
							<p>Share your unique photo sets with your friends and family!</p>
						</div>
					</div>
				</div>
			) 
	}
}


export default connect(mapStateToProps)(Home);