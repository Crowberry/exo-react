import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import AddComment from './AddComment';

const token = process.env.REACT_APP_TOKEN;

const handleChange = ({ setNewComment }) => ({ target: { value } }) => {
  setNewComment(value);
};

const handleSubmit = ({
  newComment, setNewComment, issue, onAddNewComment,
}) => (event) => {
  event.preventDefault();
  fetch(issue.comments_url, {
    method: 'POST',
    headers: { Authorization: `bearer ${token}` },
    body: JSON.stringify({ body: newComment }),
  })
    .then(response => response.json())
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