import { withState, setPropTypes, compose, withHandlers, withProps, onlyUpdateForPropTypes } from 'recompose';
import PropTypes from 'prop-types';
import string from 'string';
import UrlInput from './UrlInput';

const isGitHub = urlGit => string(urlGit).contains('github.com') && string(urlGit).contains('issues');

const handleChange = ({ setUrlGit, seturlGitValid, urlGit }) => ({ target: { value } }) => {
  setUrlGit(value);
  console.log(urlGit);
  if (isGitHub(value)) {
    seturlGitValid(true);
  } else {
    (seturlGitValid(false));
  }
};
// const handleSubmit = ({ urlGit }) => (event) => {
//   event.preventDefault();
//   const url = urlGit.replace(/github.com/, 'api.github.com/repos');
//   console.log(`url   ${url}`);
//   getNewUrl(url);
// };

const enhance = compose(
  onlyUpdateForPropTypes,
  setPropTypes({
    getNewUrl: PropTypes.func.isRequired,
  }),
  withState('urlGit', 'setUrlGit', ''),
  withState('urlGitValid', 'seturlGitValid', false),
  withHandlers({
    handleChange,
  }),
  withProps(({ getNewUrl }) => ({
    handleSubmit: ({ urlGit }) => (event) => {
      event.preventDefault();
      const url = urlGit.replace(/github.com/, 'api.github.com/repos');
      getNewUrl(url);
    },
  })),
);

export default enhance(UrlInput);
