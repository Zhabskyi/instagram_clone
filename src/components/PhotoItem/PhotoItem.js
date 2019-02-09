import React from 'react';
import classes from './PhotoItem.module.css';

const PhotoItem = (props) => {
	return (
			<div id={props.id} className={classes.PhotoItem} >
				<img alt='' srcSet={props.src}/>
			</div>
	)
}

export default PhotoItem;
