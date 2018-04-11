import React, {Component} from 'react';


//the photo_id is where the individual photo props would go, that should make the checkboxes work
//individually on the page 


class UserPhoto extends Component {

	render() {
		return (
			<div className='individual-photo center'>
				<img src={this.props.src} alt='kitty'/>
				<br/>
				<input type="checkbox" id={this.props.count} className='filled-in checkbox-yellow' name="photo" />
				<label htmlFor={this.props.count} ></label>
			</div>
		)
	}

}

export default UserPhoto;