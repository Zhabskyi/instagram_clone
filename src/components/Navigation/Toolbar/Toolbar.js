import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Input from '../../UI/input/Input';


const toolbar = (props) => (
	<nav className={classes.Toolbar}>
		<div className={classes.ToolbarBox}>
			<div className={classes.Logo}>
				<Logo />
			</div>
			<div className={classes.Input}>
				<Input />
			</div>
			<div className={classes.NavItems}>
				<NavigationItems />
			</div>
		</div>
	</nav>

);

export default toolbar;