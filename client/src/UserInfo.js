import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {liftUser} from './action/actions';

const mapStateToProps = state => {
  return{ state }
}

class UserInfo extends Component {

	constructor(props){
		super(props)

		this.onSubmit = this.onSubmit.bind(this)
	}

	onSubmit(e) {
		e.preventDefault()
		
	}

	render() {

		if (this.props.isEditing) {
	      return (
		      <div className='row user-info'>
				<div className='col s12 m8 offset-m2 center'>
					<h4>Welcome, {this.props.firstName}.</h4>
					<div className='profile-pic-frame'>
						<img src='https://media.gq.com/photos/56f29061174084154974ba05/3:2/w_560/Gwen-stefani-wcw-3x2%202.jpg' className='profile-pic' alt='gwennygwengwen'/>
					</div>
					
					<p><span className='intro-words'>Username: </span>
						<input type='text' defaultValue={this.props.userName} />
					</p>
					<p><span className='intro-words'>First Name: </span>
						<input type='text' defaultValue={this.props.firstName} />
					</p>
					<p><span className='intro-words'>Last Name: </span>
						<input type='text' defaultValue={this.props.lastName} />
					</p>
					<p><span className='intro-words'>Email: </span>
						<input type='text' defaultValue={this.props.email} />
					</p>

					<button type='submit' className='btn waves-effect waves-light yellow darken-2 white-text'>Submit</button>
					<hr />
				</div>
			</div>
	      )
	    }

		return(
			<div className='row user-info'>
				<div className='col s12 m8 offset-m2 center'>
					<h4>Welcome, {this.props.firstName}.</h4>
					<div className='profile-pic-frame'>
						<img src='https://media.gq.com/photos/56f29061174084154974ba05/3:2/w_560/Gwen-stefani-wcw-3x2%202.jpg' className='profile-pic' alt='gwennygwengwen'/>
					</div>
					<a href='/profile/edit' className='grey-text' onClick={this.props.toggleEdit}>Edit Info</a>
					<p><span className='intro-words'>Username: </span>{this.props.userName}</p>
					<p><span className='intro-words'>Name: </span>{this.props.firstName} {this.props.lastName}</p>
					<p><span className='intro-words'>Email: </span>{this.props.email}</p>
					
					<hr />
				</div>
			</div>
		)


	}

}

export default UserInfo;