import React, {Component} from 'react';

class BasicLayout extends Component {

	render() {

		return(
			<div>
				<div className='row top-row-basic-layout'>
					<div className='col s6 center'>
						<div className='basic-layout-photo-frame'>
							<img src='http://www.placekitten.com/g/300/300' alt='meow' />
						</div>
					</div>
					<div className='col s6 center'>
						<div className='basic-layout-photo-frame'>
							<img src='http://www.placekitten.com/g/300/300' alt='meow' />
						</div>
					</div>
				</div>
				<div className='row mid-row-basic-layout'>
					<div className='col s12 center'>
						<div className='basic-layout-photo-frame-mid'>
							<img src='http://www.placekitten.com/g/350/200' alt='meow' />
						</div>
					</div>
				</div>
				<div className='row bottom-row-basic-layout'>
					<div className='col s6 center'>
						<div className='basic-layout-photo-frame'>
							<img src='http://www.placekitten.com/g/300/300' alt='meow' />
						</div>
					</div>
					<div className='col s6 center'>
						<div className='basic-layout-photo-frame'>
							<img src='http://www.placekitten.com/g/300/300' alt='meow' />
						</div>
					</div>
				</div>
			</div>
		)

	}

}

export default BasicLayout;