import React from 'react';
import PropTypes from 'prop-types';
import Comment from './blocks/Comment';

const MainThread = ({
  issue, filteredComments, isLoading,
}) => (
  <div className="list-comments">
    {isLoading ?
      <p className="txt-center">Chargement des commentaires...</p>
          :
          filteredComments.map(comment =>
            (
              <Comment
                key={comment.id}
                comment={comment}
                direction={
                  comment.user.id === issue.user.id ?
                    'pull-left'
                  :
                    'pull-right'
                }
              />
            ))
        }
  </div>
);

MainThread.propTypes = {
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isLoading: PropTypes.bool.isRequired,
  filteredComments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MainThread;
