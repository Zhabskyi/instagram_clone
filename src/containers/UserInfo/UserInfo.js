import React, { Component } from 'react';

import PortfolioPicture from '../../components/Portfolio/PortfolioPicture/PortfolioPicture';
import PortfolioInfo from '../../components/Portfolio/PortfolioInfo/PortfolioInfo';
import classes from './UserInfo.module.css';
import axios from '../../axios-oders';


class UserInfo extends Component {

	state = {
		info: [],
		loading: false
	}

	componentWillMount () {
		this.setState({loading: true});
		axios.get('https://api.instagram.com/v1/users/self/?access_token=3863864665.b4c1403.480604ce5a5040c0886e97a70dfcb881')
			.then(resp => {
				console.log(resp.data);
				this.setState(oldState => ({...oldState, info: resp.data}));
			})
			.then(resp => {
				console.log(this.state.info);
				this.setState({loading: false});
			})
			.catch(error => {
				this.setState({error: true})
			});
	}

	render() {

		let photo = null;
		let stats = null;

		if (!this.state.loading) {
			photo = <PortfolioPicture src={this.state.info.data.profile_picture} />
			stats = <PortfolioInfo 
								username={this.state.info.data.username}
								posts={this.state.info.data.counts.media}
								followers={this.state.info.data.counts.follows}
								following={this.state.info.data.counts.followed_by}
								name={this.state.info.data.full_name}
							/>
		};

		return (<div className={classes.UserInfo}>
			{photo}
			{stats}
		</div>
			
		);
	}
}

export default UserInfo;