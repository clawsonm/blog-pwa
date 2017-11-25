import React from 'react';
import MarkdownIt from 'markdown-it';
import MarkdownItHljs from '../lib/markdown-it-highlightjs';

const CommentList = ({ comments }) => {

  let renderMarkdown = (raw) => {
    const md = MarkdownIt({
      linkify: true
    });
    md.use(MarkdownItHljs, {auto: true, code: true});
    let parsed = md.render(raw);
    return { __html: parsed};
  };

  let commentList = comments.comments.map((comment) => (
    <div key={comment.comment_id}>
      <div dangerouslySetInnerHTML={renderMarkdown(comment.body)}></div>
      <p> &mdash; <em>{comment.name}</em></p>
    </div>
  ));

  return (
    <div>
      {commentList}
    </div>
  );
};

export default CommentList;
