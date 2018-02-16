function newFormatComments(comments) {
  const filteredComments = [];
  comments.forEach((comment) => {
    filteredComments.push({
      login: comment.user.login,
      avatar_url: comment.user.avatar_url,
      body: comment.body,
      id: comment.user.id,
      html_url: comment.html_url,
      idComment: comment.id,
    });
  });
  return filteredComments;
}

export default newFormatComments;
