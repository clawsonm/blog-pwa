import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { get_post } from '../actions';
import Loading from './Loading';
import NotFound from './NotFound';
import CommentList from './CommentList';
import { withRouter } from 'react-router-dom';
import MarkdownIt from 'markdown-it';
import MarkdownItAttrs from '../lib/markdown-it-attrs';
import MarkdownItHljs from '../lib/markdown-it-highlightjs';

class Post extends Component {

  componentDidMount() {
    if (!this.props.post || this.props.post.slug !== this.props.match.params.slug) {
      this.props.getPost(this.props.match.params.slug);
    }
  }

  renderMarkdown(raw) {
    const md = MarkdownIt();
    md.use(MarkdownItAttrs);
    md.use(MarkdownItHljs);
    let parsed = md.render(raw);
    return { __html: parsed};
  }

  render() {
    let content = (<Loading/>);
    let commentSection = '';
    let comments = '';
    if (this.props.post &&  this.props.post.slug === this.props.match.params.slug) {
      let post = this.props.post;
      if (post.slug !== 'about') {
        if (post.comments) {
          comments = (
            <CommentList comments={post.comments} />
          );
        } else {
          comments = (
            <Loading />
          );
        }
        commentSection = (
          <div>
            <hr />
            <h1 className="font-weight-light">Comments</h1>
            {comments}
          </div>
        );
      }
      content = (
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-9 col-lg-8">
            <p className="lead">{post.summary}</p>
            <div dangerouslySetInnerHTML={this.renderMarkdown(this.props.post.body)}>
            </div>
            {commentSection}
          </div>
        </div>
      );
    }
    if (this.props.post === false) {
      content = (
        <NotFound />
      );
    }
    return (
        <div className="container content">
          {content}
        </div>
    );
  }
}

const mapStateToProps = state => ({
  post: state.post
});

const mapDispatchToProps = dispatch => bindActionCreators({
  getPost: get_post
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));
