import React, {Component} from 'react';
import {Row, Input} from 'react-materialize';

class Login extends Component {

	render() {
		return(
			<Row>
				<div className='col s8 offset-s2 login'>
					<h4> Log In! </h4>
					<hr />
					<Input type="email" label="Email" s={12}/>
					<br />
				    <Input type="password" label="Password" s={12}/>

				    <a className='btn waves-effect waves-light yellow darken-2 col s4 offset-s4'>Log In!</a>
				</div>
			</Row>
		)
	}

}

export default Login;