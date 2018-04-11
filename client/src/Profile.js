import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
// import M from 'materialize-css'
const mapStateToProps = state => {
  return{ state }
}

// <p><span className='intro-words'>Member Since: </span>{this.props.state.memberSince}</p>

class Profile extends Component {
	constructor(props){
		super(props)
		this.state={
			redirect: false,
			location: ''
		}
		this.auth = this.auth.bind(this)
	}

	auth(){
		this.setState({
			redirect: true,
			location: '/signup'
		})
	}

	render() {
		let { redirect } = this.state
		if(redirect){
			return <Redirect to={this.state.location} />
		}
		if(!this.props.state.userName){
			window.Materalize.toast("Please log in to access this page.", 'red', 3000)
			this.auth()
		}
		return(
			<div className='profile-page'>

				<div className='row user-info'>
					<div className='col s12 m8 offset-m2 center'>
						<h4>Welcome, {this.props.state.firstName}.</h4>
						<div className='profile-pic-frame'>
							<img src='https://media.gq.com/photos/56f29061174084154974ba05/3:2/w_560/Gwen-stefani-wcw-3x2%202.jpg' className='profile-pic' alt='gwennygwengwen'/>
						</div>
						<a href='/profile/edit' className='grey-text'>Edit Info</a>
						<p><span className='intro-words'>Username: </span>{this.props.state.userName}</p>
						<p><span className='intro-words'>Name: </span>{this.props.state.firstName} {this.props.state.lastName}</p>
						<p><span className='intro-words'>Email: </span>{this.props.state.email}</p>
						
						<hr />
					</div>
				</div>
				<div className='row collections-display'>
					<div className='col s12 m8 offset-m2 center'>
						<h4>Your SnapBooks</h4>
						{/*	Conditional if there are none associated w this user */}
						{/* <h5>Uh oh, you don't seem to have any! Let's go make one.</h5> */}
						<ul className='list-of-snapbooks'>
							<li> Link to a fuckin snapbook </li>
							<li> Link to a fuckin snapbook </li>
							<li> Link to a fuckin snapbook </li>
							<li> Link to a fuckin snapbook </li>
						</ul>
						<a href='/collections' className='btn waves-effect waves-light yellow darken-2 z-depth-3'>Make a SnapBook!</a>

					</div>
				</div>

			</div>
		)	
	}


}
export default connect(mapStateToProps)(Profile);