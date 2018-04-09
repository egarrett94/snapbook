import React, { Component } from 'react';

class DogLayout extends Component {

	render() {

		return(
			<div className='dog-layout'>
				<div className='row top-row-dog-layout'>
					<div className='col s6 center'>
						<div className='dog-layout-photo-frame top-left'>
							<img src='http://www.placekitten.com/g/300/300' alt='meow' />
						</div>
					</div>
					<div className='col s6 center'>
						<div className='dog-layout-photo-frame top-right'>
							<img src='http://www.placekitten.com/g/300/300' alt='meow' />
						</div>
					</div>
				</div>
				<div className='row mid-row-dog-layout'>
					<div className='col s12 center'>
						<div className='dog-layout-photo-frame-mid'>
							<div className='dog-layout-inner-frame'>
								<img src='http://www.placekitten.com/g/350/200' alt='meow' />
							</div>
						</div>
					</div>
				</div>
				<div className='row bottom-row-dog-layout'>
					<div className='col s6 center'>
						<div className='dog-layout-photo-frame'>
							<img src='http://www.placekitten.com/g/300/300' alt='meow' />
						</div>
					</div>
					<div className='col s6 center'>
						<div className='dog-layout-photo-frame'>
							<img src='http://www.placekitten.com/g/300/300' alt='meow' />
						</div>
					</div>
				</div>
			</div>		
		)
	}

}

export default DogLayout;