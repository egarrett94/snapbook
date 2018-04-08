import React, {Component} from 'react';
import Input from 'react-materialize';
import UserPhoto from './UserPhoto';
import {Carousel} from 'react-materialize';

class Collections extends Component {

	render() {
		return(
			<div className='collections-page'>
				<form>
				<div className='row'>
					<div className='col s12 m8 offset-m2'>

						<h3>STEP ONE: </h3>
						<p className='center grey-text lighten-2'>Pick one of our great layouts!</p>
						<Carousel>
							<div className='red'>
							    <h2>First Layout</h2>
							    
							  </div>
							  <div className='amber'>
							    <h2>Second Layout</h2>
							    
							  </div>
							  <div className='green'>
							    <h2>Third Layout</h2>
							    
							  </div>
						</Carousel>
						<br/><hr/><br/>

						<h3>STEP TWO: </h3>
						<p className='center grey-text lighten-2'>Pick your photos!</p>
						<a className='btn waves-effect waves-light grey lighten-2 col s4 offset-s4 grey-text text-darken-3 z-depth-4'>Upload Photos</a>
						
						<br /><br />

						<div className='photos-display row'>
							<UserPhoto />
							<UserPhoto />
							<UserPhoto />
						</div>

						<br/><hr/><br/>
						<h3>STEP THREE: </h3>
						<p className='center grey-text lighten-2'>Let us build your SnapBook!
						<br />
						<i className="material-icons large opener-icons">insert_photo</i></p>

						<input type='submit' className='btn-large waves-effect waves-light yellow darken-2 col s12' name='submit'/>
					</div>
				</div>
				</form>
			</div>
		) 
	}


}

export default Collections;