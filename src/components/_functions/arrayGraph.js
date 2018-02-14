import count from 'word-count';
import sortLoginUser from './sortLoginUser';

// function reçoit tous les commentaires ainsi que le body issue
// ressort un tableau avec pour chaque user unique tous ses commentaires (un seul string ?)

function arrayGraph(array) {
  const { issue, comments } = array;
  const newArray = [];
  const uniqArray = sortLoginUser(comments, issue);

  // pour chaque utilisateur unique, on parcourt le tableau des commentaires,
  // et on leur associe leurs commentaires
  uniqArray.forEach((user, i) => {
    newArray.push({ user, body: '' });

    if (issue.user.login === user) {
      newArray[i].body += issue.body;
    }

    comments.forEach((comment) => {
      const { login } = comment.user;
      const { body } = comment;

      if (user === login) {
        newArray[i].body += body;
      }
    });
  });

  // on remplace les commentaires par leur nombre de mot dans le tableau
  newArray.forEach((val, i) => {
    const number = count(val.body);
    newArray[i].body = number;
  });

  return newArray;
}

export default arrayGraph;
