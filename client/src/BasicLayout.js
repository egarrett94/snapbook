import React, {Component} from 'react';

class BasicLayout extends Component {

	render() {
		console.log(this.props)
		return(
			<div className='basic-layout'>
				<div className='row top-row-basic-layout'>
					<div className='col s6 center'>
						<div className='basic-layout-photo-frame'>
							<img src={this.props.pics[0].url} alt='meow' />
						</div>
					</div>
					<div className='col s6 center'>
						<div className='basic-layout-photo-frame'>
							<img src={this.props.pics[1].url} alt='meow' />
						</div>
					</div>
				</div>
				<div className='row mid-row-basic-layout'>
					<div className='col s12 center'>
						<div className='basic-layout-photo-frame-mid'>
							<img src={this.props.pics[2].url} alt='meow' />
						</div>
					</div>
				</div>
				<div className='row bottom-row-basic-layout'>
					<div className='col s6 center'>
						<div className='basic-layout-photo-frame'>
							<img src={this.props.pics[3].url} alt='meow' />
						</div>
					</div>
					<div className='col s6 center'>
						<div className='basic-layout-photo-frame'>
							<img src={this.props.pics[4].url} alt='meow' />
						</div>
					</div>
				</div>
			</div>
		)

	}

}

export default BasicLayout;