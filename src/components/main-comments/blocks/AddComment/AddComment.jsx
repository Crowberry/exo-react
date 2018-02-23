import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Textarea from 'react-textarea-autosize';
import Button from '../../../blocks/Button';

const WrapAddComment = styled.form`
  padding: 30px 15px;

  textarea {
    width: 100%;
    border-radius: 5px 5px 0 0;
    resize: none;
    margin-top: 10px;
    padding: 10px;
    font-size: 14px;
    display: block;
    border-bottom: 0;
  }
`;

const AddComment = ({ handleSubmit, handleChange, newComment }) => (
  <WrapAddComment onSubmit={handleSubmit}>
    <label htmlFor="addComment">Ajouter un commentaire</label>
    <Textarea
      minRows={3}
      maxRows={6}
      placeholder="exemple: Ah oui c'est pas terrible..."
      id="addComment"
      onChange={handleChange}
      value={newComment}
    />
    <Button
      primary
      type="submit"
      className="btn btn-principal"
    >
      Lâche ton com
    </Button>
  </WrapAddComment>
);

AddComment.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  newComment: PropTypes.string.isRequired,
};

export default AddComment;

