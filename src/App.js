import React, { Component } from 'react';
import MainNav from './components/MainNav';
import Hero from './components/Hero';
import ContentArea from './components/ContentArea';
import Footer from './components/Footer';
import { connect } from 'react-redux';
// import * as actions from './actions';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav/>
        <Hero/>
        <ContentArea/>
        <Footer/>
      </div>
    );
  }
}

export default connect(state => ({
  location: state.router.location
}), null)(App);
