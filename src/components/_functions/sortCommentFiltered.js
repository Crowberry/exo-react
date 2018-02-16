// affiche moi que les objects comments qui ne sont pas inclus
// dans le tableau filteredUSer
function sortCommentFiltered(comments, filteredUser) {
  const filteredComments = [];
  comments.forEach((comment) => {
    if (!filteredUser.includes(comment.login)) {
      filteredComments.push({
        login: comment.login,
        avatar_url: comment.avatar_url,
        body: comment.body,
        id: comment.id,
        html_url: comment.html_url,
      });
    }
  });
  return filteredComments;
}

export default sortCommentFiltered;

