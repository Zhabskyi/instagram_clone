import React from 'react';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

const layout = (props) =>  (
			<React.Fragment>
				<Toolbar/>
				<main className={classes.Main}>
					<div className={classes.Content}>
						{props.children}
					</div> 
				</main>
			</React.Fragment>
	);

export default layout;