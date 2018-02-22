// affiche moi que les objects comments qui ne sont pas inclus
// dans le tableau filteredUSers
function filterComments(comments, filteredUser) {
  return comments.filter(item => !filteredUser.includes(item.user.login));
}

export default filterComments;

