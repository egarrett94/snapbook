import React, {Component} from 'react';
// gonna need links
import {Navbar, NavItem} from 'react-materialize';
import { Link } from 'react-router-dom';


class Nav extends Component {
	constructor(props){
		super(props)
		this.linkClick = this.linkClick.bind(this)
	}

	linkClick(e){
		e.preventDefault()
	}

	render() {

		return (
			<div>
				<Navbar brand='SnapBook' className='purple darken-3' right>
					<Link to='/login'>Login</Link>
					<Link to='/'>Home</Link>
				</Navbar>
			</div>
		)
	}

}

export default Nav;