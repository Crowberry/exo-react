import count from 'word-count';

// function reçoit tous les commentaires ainsi que le body issue
// ressort un tableau avec pour chaque user unique tous ses commentaires (un seul string ?)
function arrayGraph(array, users, userFiltered) {
  const { issue, comments } = array;
  const arrayChecked = users.filter(word => !userFiltered.includes(word));
  const newArray = [];

  // pour chaque utilisateur unique, on parcourt le tableau des commentaires,
  // et on leur associe leurs commentaires

  arrayChecked.forEach((user, i) => {
    newArray.push([user, '']);
    if (issue.user.login === user) {
      newArray[i][1] += issue.body;
    }

    comments.forEach((comment) => {
      const { login } = comment.user;
      const { body } = comment;

      if (user === login) {
        newArray[i][1] += body;
      }
    });
  });


  // on remplace les commentaires par leur nombre de mot dans le tableau
  newArray.forEach((val, i) => {
    const number = count(val[1]);
    newArray[i][1] = number;
  });

  return newArray;
}

export default arrayGraph;
