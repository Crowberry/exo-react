import React, { Fragment } from 'react';
// import { compose, withState, lifecycle } from 'recompose';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import Comment from './main-comments/blocks/Comment';
import AddComment from './main-comments/blocks/AddComment/';

const MainComments = ({
  issue, isLoading, filteredComments, onAddNewComment,
}) =>
  (isLoading ? (
    <p className="txt-center">Chargement des commentaires...</p>
  ) : (
    <Fragment>
      <div className="issue-body list-comments clearfix">
        <TitleComments issue={issue} isLoading={isLoading} />
      </div>
      <div className="list-comments clearfix">
        {filteredComments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            fromAuthor={
              comment.user.id === issue.user.id
            }
          />
          ))}
      </div>
      <AddComment issue={issue} onAddNewComment={onAddNewComment} />
    </Fragment>
  ));

MainComments.propTypes = {
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isLoading: PropTypes.bool.isRequired,
  filteredComments: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddNewComment: PropTypes.func.isRequired,
};

export default MainComments;
