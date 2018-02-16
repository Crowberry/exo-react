import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TitleComments from './main-comments/TitleComments';
import Comment from './main-comments/blocks/Comment';

const MainComments = ({ issue, isLoading, filteredComments }) =>
  (isLoading ? (
    <p className="txt-center">Chargement des commentaires...</p>
  ) : (
    <Fragment>
      <div className="issue-body list-comments clearfix">
        <TitleComments issue={issue} isLoading={isLoading} />
      </div>
      <div className="list-comments clearfix">
        <div className="list-comments">
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
      </div>
    </Fragment>
  ));

MainComments.propTypes = {
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isLoading: PropTypes.bool.isRequired,
  filteredComments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainComments;
