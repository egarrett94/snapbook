import React, {Component} from 'react';


//the photo_id is where the individual photo props would go, that should make the checkboxes work
//individually on the page 


class UserPhoto extends Component {

	render() {
		return (
			<div className='individual-photo center'>
				<img src='http://www.placekitten.com/g/200/200' alt='kitty'/>
				<br/>
				<input type="checkbox" id='photo_id' className='filled-in checkbox-yellow' name="photo" />
				<label htmlFor='photo_id'></label>
			</div>
		)
	}

}

export default UserPhoto;