import React from 'react';

const Footer = props => (
  <div className="container footer">
    <div className="row">
      <div className="col">
        <hr />
        <h6 className="text-center text-muted">&copy; 2015-{(new Date()).getFullYear()} Michael Clawson unless otherwise noted</h6>
      </div>
    </div>
  </div>
);

export default Footer;
