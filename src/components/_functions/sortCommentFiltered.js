// affiche moi que les objects comments qui ne sont pas inclus
// dans le tableau filteredUSer
function sortCommentFiltered(comments, filteredUser) {
  return comments.filter(comment => !filteredUser.includes(comment.login));
}

export default sortCommentFiltered;

