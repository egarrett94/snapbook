import React, {Component} from 'react';
import {Row, Input} from 'react-materialize';

class Signup extends Component {

	render() {
		return(
			<Row>
				<div className='col s8 offset-s2 signup'>
					<h4> Sign Up! </h4>
					<hr />
					<Input type="text" label="First Name" s={12}/>
					<br />
				    <Input type="text" label="Last Name" s={12}/>
				    <br />
					<Input type="email" label="Email" s={12}/>
					<br />
				    <Input type="password" label="Password" s={12}/>

				    <a className='btn waves-effect waves-light yellow darken-2 col s4 offset-s4'>Sign Up!</a>
				</div>
			</Row>
		)
	}

}

export default Signup;