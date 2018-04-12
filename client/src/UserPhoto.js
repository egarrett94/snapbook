import React, {Component} from 'react';


//the photo_id is where the individual photo props would go, that should make the checkboxes work
//individually on the page 


class UserPhoto extends Component {
	constructor(props){
		super(props)
		this.state={
			url: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(e){
		if(e.target.checked){
			this.setState({
				url: this.props.src
			}, ()=>{
				console.log(this.state.url)
				this.props.click(this.state.url)
			})
			
		}else{
			console.log('unchecked')
		}
	}

	render() {
		let imgLink = '/collection/' + this.props.count
		return (
			<div className='individual-photo center'>
				<a href={imgLink}>
					<img src={this.props.src} alt='kitty'/>
					<br/>
					<input type="checkbox" id={this.props.count} className='filled-in checkbox-yellow' name="photo" onChange={this.handleChange}/>
					<label htmlFor={this.props.count} ></label>
				</a>
			</div>
		)
	}

}

export default UserPhoto;