import React from 'react';
import { Link } from 'react-router-dom';

const PostListing = ({ post }) => {
  return (
    <div className="row align-items-center">
      <div className="col-sm-4">
        <img className="img-fluid p-3" src={post.thumb} alt={post.title} />
      </div>
      <div className="col-sm">
        <h4><Link to={'/' + post.slug}>{post.title}</Link></h4>
        <p className="lead">{post.summary}</p>
      </div>
    </div>
  );
};

export default PostListing;
