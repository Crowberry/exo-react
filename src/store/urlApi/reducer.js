const initialState = 'https://api.github.com/repos/Crowberry/exo-react/issues/26';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'URL_RECEIVED':
      return { url: action.url };

    default:
      return state;
  }
};

export default reducer;
