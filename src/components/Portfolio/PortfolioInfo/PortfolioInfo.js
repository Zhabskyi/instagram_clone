import React from 'react';

import classes from './PortfolioInfo.module.css';

const PortfolioInfo = (props) => {
	return (
		<section>
		<div className={classes.ProfileInfo}>
			<h1>{props.username}</h1>
			<button>Edit Profile</button>
		</div>
		<ul>
			<li><span><span>{props.posts}</span> posts</span></li>
			<li><span><span>{props.followers}</span> followers</span></li>
			<li><span><span>{props.following}</span> following</span></li>
		</ul>
		<div className={classes.Name}>
			<h1>{props.name}</h1>
		</div>
	</section>
	)
}

export default PortfolioInfo;
