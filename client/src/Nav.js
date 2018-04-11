import React, {Component} from 'react';
// gonna need links
import {Navbar} from 'react-materialize';
// import M from 'materialize-css'
import {userLogout} from './action/actions'
import { Redirect, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
	return{ state }
  }

  const mapDispatchToProps = dispatch => {
	return{
		userLogout: () => dispatch(userLogout()),
	}
  }

class Nav extends Component {
	constructor(props){
		super(props)

		this.state={
			redirect: false,
			location: ''
		}
		this.logout = this.logout.bind(this)
	}

	logout(e){
		e.preventDefault()
		var token = localStorage.getItem('snapbookToken')
		if(token){
			localStorage.removeItem('snapbookToken')
		}
		console.log('here')
		this.setState({
			redirect: true,
			location: '/'
		})
		this.props.userLogout()
		// M.toast({classes: 'yellow', html: 'You have Logged Out!'})
		
	}

	render() {
		let {userId} = this.props.state
		let login = userId ? <Link to='/logout' onClick={this.logout}>Log Out</Link> : <Link to='/login'>Login</Link>
		let profile = userId ? <Link to='/profile'>Profile</Link> : <Link to='/signup'>Signup</Link>
		return (
			<div>
				<Navbar brand='SnapBook'  right>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/collections'>Collections</Link></li>
					<li>{profile}</li>
					<li>{login}</li>

				</Navbar>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);