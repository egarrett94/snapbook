import React, {Component} from 'react';
import {Input} from 'react-materialize';
import UserPhoto from './UserPhoto';
import {Carousel} from 'react-materialize';
// import M from 'materialize-css';

//the layout_id in the carousel div inputs are what will determine which layout renders

class Collections extends Component {

	// componentDidMount() {
	// 	var elem = document.querySelector('.carousel');
 //  		var instance = M.Carousel.init(elem);
 //  		var instance = M.Carousel.getInstance(elem);
	// }

	render() {

		return(
			<div className='collections-page'>
				<form>
				<div className='row'>
					<div className='col s12 m8 offset-m2'>

						<h3>STEP ONE: </h3>
						<p className='center grey-text lighten-2'>Pick one of our great layouts!</p>
						<Carousel className='carousel'>
							<div className='blue-grey center z-depth-5'>
							    <h5>First Layout</h5>
							    <input type="radio" id='layout_id' className='filled-in radio-yellow' name="layout" />
							 
							    <label htmlFor='layout_id'>Select</label>
							  </div>
							  <div className='blue-grey lighten-3 center z-depth-5'>
							    <h5>Second Layout</h5>
							    <input type="radio" id='layout_id' className='filled-in radio-yellow' name="layout" />
							 
							    <label htmlFor='layout_id'>Select</label>
							  </div>
							  <div className='blue-grey lighten-1 center z-depth-5'>
							    <h5>Third Layout</h5>
							    <input type="radio" id='layout_id' className='filled-in radio-yellow' name="layout" />
							 
							    <label htmlFor='layout_id'>Select</label>
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
							<UserPhoto />
							<UserPhoto />
							<UserPhoto />
						</div>

						<br/><hr/><br/>
						<h3>STEP THREE: </h3>
						<p className='center grey-text lighten-2'>Name it and let us build your SnapBook!
						<br />
						<i className="material-icons large opener-icons">insert_photo</i></p>
						<Input type="text" label="Name of SnapBook" s={12} icon='add_to_photos'/>

						<input type='submit' className='btn-large waves-effect waves-light yellow darken-2 col s12' name='submit'/>
					</div>
				</div>
				</form>
			</div>
		) 
	}


}

export default Collections;