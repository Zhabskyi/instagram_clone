import React, { Component } from 'react';

import PhotoItem from '../../components/PhotoItem/PhotoItem';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './PhotoContent.module.css';
import axios from '../../axios-oders';


class PhotoContent extends Component {

	state = {
		posts: [],
		loading: true
	}

	componentWillMount () {
		this.setState({loading: true});
		axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=3863864665.b4c1403.480604ce5a5040c0886e97a70dfcb881')
			.then(resp => {
				console.log(resp.data);
				this.setState(oldState => ({...oldState, posts: resp.data}));
			})
			.then(resp => {
				console.log(this.state.posts)
				this.setState({loading: false});
			})
			.catch(error => {
				this.setState({error: true})
			});
	}

	render() {
		let listPhotos = null;

		if (this.state.loading) {
			listPhotos = <Spinner />;
		} else {
		listPhotos = this.state.posts.data.map((post, i) => {
			return <PhotoItem 
				id={post.id}
				src={post.images.low_resolution.url}
				key={i}
				{...this.props}
			/>
		});
	}

	console.log({listPhotos});


		return (<div className={classes.PhotoContent}>
			{listPhotos}
		</div>
			
		);
	}
}

export default PhotoContent;