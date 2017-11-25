import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Posts from './Posts';
import Post from './Post';
import NotFound from './NotFound';

const ConnectedSwitch = connect(state => ({
  location: state.router.location
}))(Switch);

const ContentArea = () => (
  <ConnectedSwitch>
    <Route exact path="/" component={Posts} />
    <Route exact path="/NotFound" component={NotFound} />
    <Route path="/:slug" component={Post} />
    <Route component={NotFound} />
  </ConnectedSwitch>
);

export default ContentArea;
