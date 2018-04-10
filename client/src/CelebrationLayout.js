import React, { Component } from 'react';

class CelebrationLayout extends Component { 

	render() {

		return(
			<div className='celebration-layout'>
				<div className='row'>
					<div className='col s8 offset-2 celebration-layout-top-row'>
						<img src='http://www.placekitten.com/g/700/350' alt='meow' />
					</div>
					<div className='row celebration-layout-middle-row'>
						<div className='col s6'>
							<img src='http://www.placekitten.com/g/700/400' alt='meow' />
						</div>
						<div className='col s6'>
							<img src='http://www.placekitten.com/g/700/500' alt='meow' />	
						</div>
					</div>
					<div className='row'>
						<div className='col s8 offset-2'>
							<img src='http://www.placekitten.com/g/700/450' alt='meow' />
						</div>
					</div>
				</div>
			</div>
		)

	}


}

export default CelebrationLayout;