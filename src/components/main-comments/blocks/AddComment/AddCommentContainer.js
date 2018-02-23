import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import { callApi } from '../../../../functions/callApi';
import AddComment from './AddComment';

// const token = process.env.REACT_APP_TOKEN;

const handleChange = ({ setNewComment }) => ({ target: { value } }) => {
  setNewComment(value);
};

const handleSubmit = ({
  newComment,
  setNewComment,
  issue,
  onAddNewComment,
}) => (event) => {
  event.preventDefault();
  const body = JSON.stringify({ body: newComment });

  callApi(issue.comments_url, 'post', body)
    .then(() => {
      onAddNewComment();
      setNewComment('');
    });
};

const enhance = compose(
  withState('newComment', 'setNewComment', ''),
  withHandlers({
    handleChange,
    handleSubmit,
  }),
);

export default enhance(AddComment);
