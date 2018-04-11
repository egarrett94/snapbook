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
				<Navbar brand='SnapBook'  right>

					<li>{login}</li>
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/signup'>Signup</Link></li>
					<li><Link to='/collections'>Collections</Link></li>

				</Navbar>
			</div>
		)
	}

}

export default connect(mapStateToProps)(Nav);