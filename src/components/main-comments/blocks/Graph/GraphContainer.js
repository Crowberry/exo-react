import { compose, withProps } from 'recompose';
import Rainbow from 'rainbowvis.js';
import Graph from './Graph';
import arrayGraph from '../../../../functions/arrayGraph';

// On récupère le tableau de données qu'on va passer au graph
// avec la première colonne
const getGraphArray = (...props) => {
  const arrayData = arrayGraph(...props);
  arrayData.unshift(['Utilisateurs', 'nombre de mots']);

  return arrayData;
};

// On récupère le tableau de grandient de couleur en fonction
// du nombre d'utilisateurs
const getArrayColors = (nbUsers) => {
  const rainbow = new Rainbow();
  rainbow.setSpectrum('#ef7f47', '#b7e9ff');
  const colors = [];
  for (let i = 0; i < nbUsers; i += 1) {
    if (nbUsers > 1) {
      const coefRainbow = (i * 100) / (nbUsers - 1);
      colors.push(`#${rainbow.colourAt(coefRainbow)}`);
    } else {
      colors.push('#ef7f47');
    }
  }
  return colors;
};

// on récupère le nombre total de mot
const getTotalWords = (array) => {
  let totalWords = 0;
  array.forEach((data, i) => {
    if (i > 0) {
      totalWords += data[1];
    }
  });
  return totalWords;
};

const enhance = compose(
  withProps(props => ({
    dataGraph: props.isLoading ? [] : getGraphArray(
      props.issue,
      props.filteredComments,
      props.users,
      props.filteredUsers,
    ),
    colors: props.isLoading ?
      [] : getArrayColors((props.users.length - props.filteredUsers.length)),
  })),
  withProps(props => ({
    totalWords: props.isLoading ? 0 : getTotalWords(props.dataGraph),
  })),
);

export default enhance(Graph);
