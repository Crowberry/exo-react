function userLoginInArray(commentData) {
  const tempcommentData = [];
  commentData.forEach(comment => tempcommentData.push(comment.user.login));
  return tempcommentData;
}

function removeDupArray(arr) {
  const array = arr.filter((elem, index, self) => index === self.indexOf(elem));
  return array;
}

function sortLoginUser(commentData, issueData) {
  const authorComment = userLoginInArray(commentData);
  authorComment.push(issueData.user.login);
  const loginUser = removeDupArray(authorComment);
  return loginUser;
}

export default sortLoginUser;
