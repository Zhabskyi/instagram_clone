import React, { Component } from 'react';


import classes from './App.module.css';
import Layout from './hoc/Layout/Layout';
import PhotoContent from './containers/PhotoContent/PhotoContent';
import UserInfo from './containers/UserInfo/UserInfo';


class App extends Component {
  render() {
    return (
      <div className={classes.Page}>
				<Layout>
					<UserInfo/>
					<PhotoContent/>
				</Layout>
      </div>
    );
  }
}

export default App;
