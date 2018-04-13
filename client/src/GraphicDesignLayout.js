import React, { Component } from 'react';

class GraphicDesignLayout extends Component { 

	render() {

		return(
			<div className='graphic-layout'>
				<div className='row'>
					<h3>graphic design is my passion!!!!!!!!!!</h3>
					<img src='https://png.pngtree.com/element_origin_min_pic/16/10/05/2157f5028aa7455.jpg' alt='make it stop' className='froggo' />
					<div className='col s12'>
						<div className='row graphic-layout-top-row'>
							<div className='col s12 graphic-layout-frame'>
								<img src={this.props.pics[0].url} alt='meow' />
							</div>
						</div>
						<div className='row graphic-layout-middle-row'>
							<div className='col s6 graphic-layout-frame'>
								<img src={this.props.pics[1].url} alt='meow' />
							</div>
							<div className='col s6 graphic-layout-frame'>
								<img src={this.props.pics[2].url} alt='meow' />	
							</div>
						</div>
						<div className='row graphic-layout-bottom-row'>
							<div className='col s6 graphic-layout-frame'>
								<img src={this.props.pics[3].url} alt='meow' />
							</div>
							<div className='col s6 graphic-layout-frame'>
								<img src={this.props.pics[4].url} alt='meow' />	
							</div>
						</div>
					</div>
				</div>
			</div>
		)

	}


}

export default GraphicDesignLayout;