import React, {Component} from 'react';
import {Input, Modal, Button} from 'react-materialize';
import axios from 'axios';
import UserPhoto from './UserPhoto';
import {Carousel} from 'react-materialize';
import {connect} from 'react-redux'
// import M from 'materialize-css';

import BasicLayoutImg from './basiclayoutthumbnail.png';
import DogLayoutImg from './doglayoutthumbnail.png';
import CelebrationLayoutImg from './celebrationlayoutthumbnail.png';
import GraphicDesignLayoutImg from './graphicdesignlayoutthumbnail.png';
import SunflowerLayoutImg from './sunflowerlayoutthumbnail.png';

//the layout_id in the carousel div inputs are what will determine which layout renders

const mapStateToProps = state => {
	return{ state }
  }

class Collections extends Component {
	constructor(props){
		super(props)
		this.state={
			pictures: []
		}
		this.submitNewOPhoto = this.submitNewOPhoto.bind(this)
	}

	submitNewOPhoto(e){
		e.preventDefault()
		console.log(e.target)
		// axios.post('/collections',{

		// }).then((data)=>{
		// 	console.log(data)
		// })
	}

	componentDidMount() {
		if(this.props.state.userId){
			axios.post('/collections/index',{
				userId: this.props.state.userId
			}).then(data => {
				this.setState({
					pictures: data.data
				})
			})
		}
	}

	render() {
		console.log(this.state)
		let collection = this.state.pictures.map((butt, i) =>
			<UserPhoto src={butt.url} key={i} count={butt.id} />)
		let subPhotoModal = this.props.state.userId ? 
			<div>
				<form encType="multipart/form-data">
					<input type="file" name="myFile" />
					<input type="hidden" value={this.props.state.userId} name='userId' />
					<input type="submit" className="btn btn-primary" onClick={this.submitNewOPhoto}/>
				</form>
			</div>
		 : 
		 	<div>
				<p>Please Login First</p> 
			</div>
		return(
			<div className='collections-page'>
				<form>
				<div className='row'>
					<div className='col s12 m8 offset-m2'>

						<h3>STEP ONE: </h3>
						<p className='center grey-text lighten-2'>Pick one of our great layouts!</p>
						<Carousel className='carousel'>
							<div className='yellow darken-2 center z-depth-5'>
							    <h5>Basic Layout</h5>
							    <img src={BasicLayoutImg} alt='basic layout' />
							    <input type="radio" id='layout_id' className='filled-in radio-yellow' name="layout" />
							    <label htmlFor='layout_id'>Select</label>
							  </div>
							  <div className='yellow darken-2 center z-depth-5'>
							    <h5>Celebration Layout</h5>
							    <img src={CelebrationLayoutImg} alt='dog layout' />
							    <input type="radio" id='layout_id' className='filled-in radio-yellow' name="layout" />
							    <label htmlFor='layout_id'>Select</label>
							  </div>
							  <div className='yellow darken-2 center z-depth-5'>
							    <h5>Dog Layout</h5>
								<img src={DogLayoutImg} alt='dog layout' />
							    <input type="radio" id='layout_id' className='filled-in radio-yellow' name="layout" />
							    <label htmlFor='layout_id'>Select</label>
							  </div>
							  <div className='yellow darken-2 center z-depth-5'>
							    <h5>Perfect Layout</h5>
								<img src={GraphicDesignLayoutImg} alt='perfect layout' />
							    <input type="radio" id='layout_id' className='filled-in radio-yellow' name="layout" />
							    <label htmlFor='layout_id'>Select</label>
							  </div>
							  <div className='yellow darken-2 center z-depth-5'>
							    <h5>Sunflower Layout</h5>
								<img src={SunflowerLayoutImg} alt='sunflower layout' />
							    <input type="radio" id='layout_id' className='filled-in radio-yellow' name="layout" />
							    <label htmlFor='layout_id'>Select</label>
							  </div>
						</Carousel>
						<br/><hr/><br/>

						<h3>STEP TWO: </h3>
						<p className='center grey-text lighten-2'>Pick your photos!</p>
						<button data-target="submitPhoto" >Upload Photos</button>
						<Modal
							header='Choose File to Upload'
							trigger={<Button className='modal-trigger btn waves-effect waves-light grey lighten-2 col s4 offset-s4 grey-text text-darken-3 z-depth-4'>Upload Photo</Button>}>
							{subPhotoModal}
						</Modal>
						<br /><br />

						<div className='photos-display row'>
							{collection}
						</div>

						<br/><hr/><br/>
						<h3>STEP THREE: </h3>
						<p className='center grey-text lighten-2'>Name it and let us build your SnapBook!
						<br />
						<i className="material-icons large opener-icons collections">insert_photo</i></p>
						<Input type="text" label="Name of SnapBook" s={12} icon='add_to_photos'/>

						<input type='submit' className='btn-large waves-effect waves-light yellow darken-2 col s12' name='submit'/>
					</div>
				</div>
				</form>
			</div>
		) 
	}


}

export default connect(mapStateToProps)(Collections);