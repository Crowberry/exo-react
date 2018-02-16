import React from 'react';
import PropTypes from 'prop-types';
import Markdown from '../Markdown';

const MainThread = ({
  issue, filteredComments, isLoading,
}) => (
  <div className="list-comments">
    {isLoading ?
      <p className="txt-center">Chargement des commentaires...</p>
          :
          filteredComments.map(comment =>
            (comment.id === issue.user.id ?
              (
                <div
                  key={comment.idComment}
                  className="clearfix authorIssue pull-left clear"
                >
                  <a
                    href={comment.html_url}
                    title={comment.login}
                    className="avatar-user pull-left"
                  >
                    <img
                      alt={comment.login}
                      src={comment.avatar_url}
                    />
                  </a>
                  <Markdown className="pull-left comment">
                    {comment.body}
                  </Markdown>
                </div>
              )
            : (
              <div
                key={comment.idComment}
                className="clearfix commentsOther pull-right clear"
              >
                <a
                  href={comment.html_url}
                  title={comment.login}
                  className="avatar-user pull-right"
                >
                  <img
                    alt={comment.login}
                    src={comment.avatar_url}
                  />
                </a>
                <Markdown className="pull-right comment">
                  {comment.body}
                </Markdown>
              </div>
              )
            ))
        }
  </div>
);

MainThread.propTypes = {
  issue: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  isLoading: PropTypes.bool.isRequired,
  filteredComments: PropTypes.arrayOf(PropTypes.shape({
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    html_url: PropTypes.string,
    id: PropTypes.number,
  })).isRequired,
};

export default MainThread;
