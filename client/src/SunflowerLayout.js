import React, { Component } from 'react';

class SunflowerLayout extends Component { 

	render() {

		return(
			<div className='sunflower-layout'>
				<div className='row'>
					<div className='col s8 offset-s2 window'>
						<div className='row sunflower-layout-top-row'>
							<div className='col s12 sunflower-layout-frame'>
								<img src='http://www.placekitten.com/g/700/350' alt='meow' />
							</div>
						</div>
						<div className='row sunflower-layout-middle-row'>
							<div className='col s6 sunflower-layout-frame'>
								<img src='http://www.placekitten.com/g/700/400' alt='meow' />
							</div>
							<div className='col s6 sunflower-layout-frame'>
								<img src='http://www.placekitten.com/g/700/500' alt='meow' />	
							</div>
						</div>
						<div className='row sunflower-layout-bottom-row'>
							<div className='col s6 sunflower-layout-frame'>
								<img src='http://www.placekitten.com/g/700/400' alt='meow' />
							</div>
							<div className='col s6 sunflower-layout-frame'>
								<img src='http://www.placekitten.com/g/700/500' alt='meow' />	
							</div>
						</div>
					</div>
				</div>
			</div>
		)

	}


}

export default SunflowerLayout;