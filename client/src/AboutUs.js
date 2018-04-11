import React from 'react';
import Lemon from './lemon.jpg';

import Gonthor from './gonthor.jpg';
import LinkedIn from './linkedin.png';
import GitHub from './github.png';
import Email from './email.png';

const AboutUs = () => {

	return(

		<div>
		<div className='row about-opener'>
			<div className='col s12 m12 l8 offset-l2'>
				<h1 className='white-text about-us-title'>About Us</h1>
			</div>
		</div>
		<div className='row'>
			<div className='col s12 m12 l8 offset-l2'>
				<div className='col s12 m12 l6 center'>
					<img className='mostly-human-developer' src={Lemon} alt='img'/>
					<br/>
					<h5 className='about-names'>Emily "Lemon" Garrett</h5>
					<p className='about-desc'>Lemon is passionate about taking the opportunity to utilize the endless resources that technology provides to help those in need. She deeply believes in using technology for more than just creating the slickest new product or game; she believes in employing it to promote inclusivity and create change.</p>
					<div className='col s12 center socials'>
						<a href='http://www.github.com/egarrett94'><img className='social-icons' src={GitHub} alt='img'/></a>
						<a href='https://www.linkedin.com/in/emilymariegarrett94'><img className='social-icons' src={LinkedIn} alt='img'/></a>
						<a href='mail-to:e.marie.garrett@gmail.com'><img className='social-icons' src={Email} alt='img'/></a>
					</div>
				</div>
				<div className='col s12 m12 l6 center'>
					<img className='mostly-human-developer' src={Gonthor} alt='img'/>
					<br/>
					<h5 className='about-names'>Kyle Van Bergen</h5>
					<p className='about-desc'>As a full-stack developer with robust experience as a technical consultant, Kyle's tendency toward purpose-driven work is deeply ingrained. Working in both large and small teams has allowed him to produce thoughtful, effective solutions through compromise and constructive collaboration.</p>
					<div className='col s12 center socials'>
						<a href='http://www.github.com/kyleavb'><img className='social-icons' src={GitHub} alt='img'/></a>
						<a href='https://www.linkedin.com/in/kylevanbergen'><img className='social-icons' src={LinkedIn} alt='img'/></a>
						<a href='mail-to:kyleavb@gmail.com'><img className='social-icons' src={Email} alt='img'/></a>
					</div>
				</div>
			</div>
		</div>
		</div>
		)

}


export default AboutUs;