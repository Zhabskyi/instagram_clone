import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

import compass from '../../../assets/images/compass.png';
import hart from '../../../assets/images/hart.png';
import man from '../../../assets/images/man.png';

const navigationItems = () => (
	<div className={classes.NavigationItems}>
		<NavigationItem link="/" exact><img src={compass} alt="Discover people"/></NavigationItem>
		<NavigationItem link="/"><img src={hart} alt="Likes"/></NavigationItem>
		<NavigationItem link="/"><img src={man} alt="About yourself"/></NavigationItem>
	</div>
);

export default navigationItems;
