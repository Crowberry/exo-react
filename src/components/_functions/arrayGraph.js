import count from 'word-count';
import Rainbow from 'rainbowvis.js';
import sortLoginUser from './sortLoginUser';

// on déclare les 2 couleurs que va prendre le graph et qui vont faire un gradient
const rainbow = new Rainbow();
rainbow.setSpectrum('#ef7f47', '#F6B99A');

// function reçoit tous les commentaires ainsi que le body issue
// ressort un tableau avec pour chaque user unique tous ses commentaires (un seul string ?)
function arrayGraph(array) {
  const { issue, comments } = array;
  const newArray = [];
  const uniqArray = sortLoginUser(comments, issue);
  // const nbUsers = uniqArray.length;

  // pour chaque utilisateur unique, on parcourt le tableau des commentaires,
  // et on leur associe leurs commentaires
  uniqArray.forEach((user, i) => {
    // const coefRainbow = (i * 100) / (nbUsers - 1);

    // newArray.push({ value: '', key: user, color: `#${rainbow.colourAt(coefRainbow)}` });
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
