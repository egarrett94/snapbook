import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
import {Row, Input} from 'react-materialize';
import {connect} from 'react-redux'
import {liftUser} from './action/actions'
import axios from 'axios'
import Button from 'react-materialize/lib/Button';
// import M from 'materialize-css'

const mapStateToProps = state => {
	return{ state }
  }

const mapDispatchToProps = dispatch => {
	return{
		  liftUser: (userInfo) => dispatch(liftUser(userInfo)),
	}
  }

class Signup extends Component {
	constructor(props){
		super(props)
		this.state={
			firstName: '',
			lastName: '',
			userName: '',
			email: '',
			password: '',
			redirect: false,
			location: ''
		}
		this.submitForm = this.submitForm.bind(this)
		this.firstChange = this.firstChange.bind(this)
		this.lastChange = this.lastChange.bind(this)
		this.emailChange = this.emailChange.bind(this)
		this.passwordChange = this.passwordChange.bind(this)
		this.userNameChange = this.userNameChange.bind(this)
	}

	firstChange(e){
		this.setState({firstName: e.target.value})
	}

	lastChange(e){
		this.setState({lastName: e.target.value})
	}

	emailChange(e){
		this.setState({email: e.target.value})
	}

	passwordChange(e){
		this.setState({password: e.target.value})
	}

	userNameChange(e){
		this.setState({userName: e.target.value})
	}

	submitForm(e){
		e.preventDefault()
		axios.post('/auth/signup', {
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			email: this.state.email,
			userName: this.state.userName,
			password: this.state.password
		}).then( data => {
			if(data.data.user){
				console.log(data.data.user.userName)
				window.Materialize.toast("Account Created and Logged In!", 3000, 'green')
				localStorage.setItem('snapbookToken', data.data.token)
				this.props.liftUser({
				firstName: data.data.user.firstName,
				lastName: data.data.user.lastName,
				email: data.data.user.email,
				userName: data.data.user.userName,
				userId: data.data.user.id,
				memberSince: data.data.user.createdAt
				})
			}else{
				window.Materialize.toast(data.data, 3000, 'red')
				this.setState({
					redirect: true,
					location: '/login'
				})
			}
			
		})

	}

	render() {
		const { redirect } = this.state;

		if(redirect){
			return <Redirect to={this.state.location} />
		}
		return(
			<Row>
				<div className='col s8 offset-s2 signup'>
					<form onSubmit={this.submitForm}>
						<h4> Sign Up! </h4>
						<hr />
						<Input type="text" label="First Name" s={12} onChange={this.firstChange}/>
						<br />
						<Input type="text" label="Last Name" s={12} onChange={this.lastChange}/>
						<br />
						<Input type="email" label="Email" s={12} onChange={this.emailChange}/>
						<br />
						<Input type="text" label="User Name" s={12} onChange={this.userNameChange}/>
						<br />
						<Input type="password" label="Password" s={12} onChange={this.passwordChange}/>

						<Button type='submit' className='btn waves-effect waves-light yellow darken-2 col s4 offset-s4' >Sign Up!</Button>
					</form>
				</div>
			</Row>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);