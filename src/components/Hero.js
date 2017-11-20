import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, Route, Switch } from 'react-router-dom';

const ConnectedSwitch = connect(state => ({
  location: state.router.location
}))(Switch);

const Hero = props => {
  let defaultHeading = (
    <div>
      <h1 className="text-center text-uppercase">Let's Make<br /> Magic Happen</h1>
      <p className="lead mb-0 text-center font-italic"><Link to="/about">Michael Clawson</Link></p>
    </div>
  );
  let heading = '';
  let { post } = props;
  if (post && post.title) {
    heading = (
      <h1 className="text-center text-uppercase">{props.post.title}</h1>
    );
  }

  return (
    <div className="jumbotron jumbotron-fluid bg-dark">
      <div className="container-fluid">
        <ConnectedSwitch>
          <Route exact path="/" render={props => (
            defaultHeading
          )}/>
          <Route path="/:slug" render={props => {
            if (post && post.slug === props.match.params.slug) {
              return heading;
            }
            return defaultHeading;
          }} />
        </ConnectedSwitch>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  post: state.post
});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Hero)
);
