import React, { Component } from 'react';
import {Redirect, Link} from 'react-router-dom'
import { connect } from 'react-redux';
import UserInfo from './UserInfo';

const mapStateToProps = state => {
  return{ state }
}

// <p><span className='intro-words'>Member Since: </span>{this.props.state.memberSince}</p>

class Profile extends Component {
	constructor(props){
		super(props)
		this.state={
			redirect: false,
			location: '',
			isEditing: false
		}
		this.auth = this.auth.bind(this)
		this.toggleEdit = this.toggleEdit.bind(this)

	}

	auth(){
		this.setState({
			redirect: true,
			location: '/login'
		})
	}

	toggleEdit(e) {
		e.preventDefault()
		console.log('editing')
		this.setState({
			isEditing: !this.state.isEditing
		})
	}

	render() {
		let { redirect } = this.state

		if(redirect){
			return <Redirect to={this.state.location} />
		}

		if(!this.props.state.userName){
			//window.Materalize.toast("Please log in to access this page.", 'red', 3000)
			this.auth()
		}

		return(
			<div className='profile-page'>
			

				<UserInfo 
					userName={this.props.state.userName} 
					firstName={this.props.state.firstName}
					lastName={this.props.state.lastName}
					email={this.props.state.email} 
					toggleEdit={this.toggleEdit}
					isEditing={this.state.isEditing}
				/>

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
						<Link to='/collections' className='btn waves-effect waves-light yellow darken-2 z-depth-3'>Make a SnapBook!</Link>

					</div>
				</div>

			</div>
		)	
	}


}
export default connect(mapStateToProps)(Profile);