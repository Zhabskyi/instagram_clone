import React from 'react';

import instagramLogo from '../../../assets/images/logo.png';
import camera from '../../../assets/images/camera.png';
import classes from './Logo.module.css';

const logo = (props) => (
	<React.Fragment>
		<div className={classes.Logo} >
			<img src={camera} alt="camera"/>
		</div>
		<div className={classes.Logo} >
			<img src={instagramLogo} alt="Instagram"/>
		</div>
		</React.Fragment>
);

export default logo;