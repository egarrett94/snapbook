import React, {Component} from 'react';
// gonna need links
import {Navbar, NavItem} from 'react-materialize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return{ state }
  }

class Nav extends Component {

	render() {
		let {userId} = this.props.state
		let login = userId ? <Link to='/logout'>Log Out</Link> : <Link to='/login'>Log In</Link>
		return (
			<div>
				<Navbar brand='SnapBook' className='purple darken-3' right>
					{login}
					<Link to='/'>Home</Link>
					<Link to='/signup'>Signup</Link> 
					<Link to='/collections'>Collections</Link> 
				</Navbar>
			</div>
		)
	}

}

export default connect(mapStateToProps)(Nav);