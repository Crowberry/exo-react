const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DATA_RECEIVED':
      return {
        data: action.data,
      };
    case 'ISSUE_RECEIVED':
      return {
        issue: state.data.issue,
      };
    case 'COMMENTS_RECEIVED':
      return {
        comments: state.data.comments,
      };
    default:
      return state;
  }
};


export default reducer;
