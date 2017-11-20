import React from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, withRouter } from 'react-router-dom';

const MainNav = props => (
  <nav className="navbar navbar-expand-sm navbar-light bg-light">
    <Link className="navbar-brand mb-0 h1" to="/">LMMH</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" exact to="/">Articles</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);

export default withRouter(
  connect(
    null,
    null
  )(MainNav)
);
