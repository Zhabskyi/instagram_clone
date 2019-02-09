import React from 'react';
import classes from './PortfolioPicture.module.css';

const PortfolioPicture = (props) => {
	return (
		<div className={classes.PortfolioPicture}>
			<div>
				<div>
					<img alt='Profile' srcSet={props.src}/>
				</div>
			</div>
		</div>
	)
}

export default PortfolioPicture;
