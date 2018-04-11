import React, {Component} from 'react';
import axios from 'axios'
import {connect} from 'react-redux'
import {liftUser} from './action/actions'
import {Row, Input} from 'react-materialize';

const mapStateToProps = state => {
	return{ state }
  }
const mapDispatchToProps = dispatch => {
	return{
		  liftUser: (userInfo) => dispatch(liftUser(userInfo)),
	}
  }

class Login extends Component {
	constructor(props){
		super(props)

		this.submit = this.submit.bind(this)
	}
	submit(e){
		e.preventDefault()
		axios.post('/auth/login', {
			test: 'test'
		}).then((data)=>{
			console.log('stuff')
			console.log(data)
		  })
		// var data = {
		// 	userId: 'test',
		// 	firstName: "kyle",
		// 	lastName: "Van Bergen",
		// 	userName: "butts"
		// }
		// this.props.liftUser(data)
	}

	render() {
		console.log(this.props)
		return(
			<Row>
				<div className='col s8 offset-s2 login'>
					<h4> Log In! </h4>
					<hr />
					<form>
						<Input type="email" label="Email" s={12}/>
						<br />
						<Input type="password" label="Password" s={12}/>
						<a className='btn waves-effect waves-light yellow darken-2 col s4 offset-s4' onClick={this.submit}>Log In!</a>
					</form>
				</div>
			</Row>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);