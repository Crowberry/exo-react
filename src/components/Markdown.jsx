import React from 'react';
import PropTypes from 'prop-types';
import { markdown } from 'markdown';

const Markdown = ({ children, ...props }) => (
  <div dangerouslySetInnerHTML={{ __html: markdown.toHTML(children) }} {...props} />
);

Markdown.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Markdown;
