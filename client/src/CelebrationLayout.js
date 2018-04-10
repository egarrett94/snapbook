import React, { Component } from 'react';

class CelebrationLayout extends Component { 

	render() {

		return(
			<div className='celebration-layout'>
				<div className='row'>
					<h4 className='celebration-header'>Let's Celebrate!</h4>
					<div className='col s8 offset-s2'>
						<div className='row celebration-layout-top-row'>
							<div className='col s12 celebration-layout-frame'>
								<img src='http://www.placekitten.com/g/700/350' alt='meow' />
							</div>
						</div>
						<div className='row celebration-layout-middle-row'>
							<div className='col s6 celebration-layout-frame'>
								<img src='http://www.placekitten.com/g/700/400' alt='meow' />
							</div>
							<div className='col s6 celebration-layout-frame'>
								<img src='http://www.placekitten.com/g/700/500' alt='meow' />	
							</div>
						</div>
						<div className='row celebration-layout-bottom-row'>
							<div className='col s12 celebration-layout-frame'>
								<img src='http://www.placekitten.com/g/700/450' alt='meow' />
							</div>
						</div>
					</div>
				</div>
			</div>
		)

	}


}

export default CelebrationLayout;