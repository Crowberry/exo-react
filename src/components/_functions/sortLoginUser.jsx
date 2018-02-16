function userLoginInArray(commentData, check) {
  const tempcommentData = [];
  if (check) {
    commentData.forEach(comment => tempcommentData.push(comment.user.login));
  } else {
    commentData.forEach(comment => tempcommentData.push(comment.login));
  }
  return tempcommentData;
}

function removeDupArray(arr) {
  const array = arr.filter((elem, index, self) => index === self.indexOf(elem));
  return array;
}

function sortLoginUser(commentData, issueData, bool) {
  const authorComment = userLoginInArray(commentData, bool);
  authorComment.push(issueData.user.login);
  const loginUser = removeDupArray(authorComment);
  return loginUser;
}

export default sortLoginUser;
