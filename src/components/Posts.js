import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get_posts } from '../actions';
import Loading from './Loading';
import PostListing from './PostListing';

class Posts extends Component {

  componentDidMount() {
    if (!this.props.posts) {
      this.props.getPosts();
    }
  }

  generatePostListings(posts) {
    return posts.map(post => (<PostListing post={post} key={post.slug} />));
  }

  render() {
    let content = (<Loading/>);
    if (this.props.posts) {
      if (this.props.posts.count === 0) {
        content = (<h1>Sorry no content to display</h1>);
      } else {
        content = this.generatePostListings(this.props.posts.posts);
      }
    }
    return (
        <div className="container content">
          {content}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPosts: get_posts
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
