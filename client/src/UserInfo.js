import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect, Link} from 'react-router-dom'
import {liftUser} from './action/actions';

const mapStateToProps = state => {
  return{ state }
}
const mapDispatchToProps = dispatch => {
	return{
		  liftUser: (userInfo) => dispatch(liftUser(userInfo)),
	}
  }
//on each input, lift to local state 
//then on submit it'll be in state

class UserInfo extends Component {

	constructor(props){
		super(props)

		this.state={
			isEditing:false,
			firstNameEdit: '',
			lastNameEdit: '',
			userNameEdit: '',
			emailEdit: '',
			redirect: false,
			location: ''
		}

		this.onSubmit = this.onSubmit.bind(this)
		this.toggleEdit = this.toggleEdit.bind(this)
		this.gatherUserName = this.gatherUserName.bind(this)
		this.gatherFirstName = this.gatherFirstName.bind(this)
		this.gatherLastName = this.gatherLastName.bind(this)
		this.gatherEmail = this.gatherEmail.bind(this)
	}

	onSubmit(e) {
		e.preventDefault()
		axios.put('/profile', {
			firstName: this.state.firstNameEdit,
			lastName: this.state.lastNameEdit,
			email: this.state.emailEdit,
			userName: this.state.userNameEdit,
			id: this.props.state.userId
		}).then( (data) => {
			this.props.liftUser({
				firstName: this.state.firstNameEdit,
				lastName: this.state.lastNameEdit,
				email: this.state.emailEdit,
				userName: this.state.userNameEdit
			})
			this.setState({
				isEditing: false
			})
		})
		console.log('get it')
	}

	componentDidMount() {
		this.setState({
			firstNameEdit: this.props.firstName,
			lastNameEdit: this.props.lastName,
			userNameEdit: this.props.userName,
			emailEdit: this.props.email,
		})
	}

	gatherFirstName(e){
		this.setState({
			firstNameEdit: e.target.value
		}, ()=> {
			console.log('state: ', this.state.firstNameEdit, this.props.state.userId)
		})
	}

	gatherLastName(e){
		this.setState({
			lastNameEdit: e.target.value
		}, ()=> {
			console.log('state: ', this.state.lastNameEdit)
		})
	}

	gatherUserName(e){
		this.setState({
			userNameEdit: e.target.value
		}, ()=> {
			console.log('state: ', this.state.userNameEdit)
		})
	}

	gatherEmail(e){
		this.setState({
			emailEdit: e.target.value
		}, ()=> {
			console.log('state: ', this.state.emailEdit)
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
		let {redirect} = this.state
		if (this.state.redirect) {
			<Redirect to={this.state.location} />
		}
		if (this.state.isEditing) {
	      return (
		      <div className='row user-info'>
				<div className='col s12 m8 offset-m2 center'>
					<h4>Welcome, {this.props.firstName}.</h4>
					<div className='profile-pic-frame'>
						<img src='https://media.gq.com/photos/56f29061174084154974ba05/3:2/w_560/Gwen-stefani-wcw-3x2%202.jpg' className='profile-pic' alt='gwennygwengwen'/>
					</div>
					
					<p><span className='intro-words'>Username: </span>
						<input type='text' defaultValue={this.props.userName} onChange={this.gatherUserName} />
					</p>
					<p><span className='intro-words'>First Name: </span>
						<input type='text' defaultValue={this.props.firstName} onChange={this.gatherFirstName} />
					</p>
					<p><span className='intro-words'>Last Name: </span>
						<input type='text' defaultValue={this.props.lastName} onChange={this.gatherLastName} />
					</p>
					<p><span className='intro-words'>Email: </span>
						<input type='text' defaultValue={this.props.email} onChange={this.gatherEmail}/>
					</p>

					<button type='submit' className='btn waves-effect waves-light yellow darken-2 white-text' onClick={this.onSubmit}>Submit</button>
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
					<a className='grey-text' onClick={this.toggleEdit}><Link to='/profile/edit'>Edit</Link></a>
					<p><span className='intro-words'>Username: </span>{this.props.userName}</p>
					<p><span className='intro-words'>Name: </span>{this.props.firstName} {this.props.lastName}</p>
					<p><span className='intro-words'>Email: </span>{this.props.email}</p>
					
					<hr />
				</div>
			</div>
		)


	}

}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);