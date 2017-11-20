import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Posts from './Posts';
import Post from './Post';

const ConnectedSwitch = connect(state => ({
  location: state.router.location
}))(Switch);

const ContentArea = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={Posts} />
    <Route path="/:slug" component={Post} />
  </ConnectedSwitch>
);

export default ContentArea;
