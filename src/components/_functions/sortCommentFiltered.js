// function transformData(comments) {
//   const newObject = [];
//   comments.map(comment =>
//     newObject.push({
//       login: comment.user.login,
//       avatar_url: comment.user.avatar_url,
//       body: comment.body,
//       id: comment.user.id,
//     }));
//   return newObject;
// }
const commentsTest = [
  {
    url: 'https://api.github.com/repos/stadline/js-technical-test/issues/comments/359372488',
    html_url: 'https://github.com/stadline/js-technical-test/issues/2#issuecomment-359372488',
    issue_url: 'https://api.github.com/repos/stadline/js-technical-test/issues/2',
    id: 359372488,
    user: {
      login: 'alex-pex',
      id: 368155,
      avatar_url: 'https://avatars0.githubusercontent.com/u/368155?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/alex-pex',
      html_url: 'https://github.com/alex-pex',
      followers_url: 'https://api.github.com/users/alex-pex/followers',
      following_url: 'https://api.github.com/users/alex-pex/following{/other_user}',
      gists_url: 'https://api.github.com/users/alex-pex/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/alex-pex/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/alex-pex/subscriptions',
      organizations_url: 'https://api.github.com/users/alex-pex/orgs',
      repos_url: 'https://api.github.com/users/alex-pex/repos',
      events_url: 'https://api.github.com/users/alex-pex/events{/privacy}',
      received_events_url: 'https://api.github.com/users/alex-pex/received_events',
      type: 'User',
      site_admin: false,
    },
    created_at: '2018-01-22T09:46:29Z',
    updated_at: '2018-01-22T09:49:16Z',
    author_association: 'COLLABORATOR',
    body: "# Premier commentaire\r\n\r\nOn est bien d'accord que c'est pas une vraie issue, celle-ci est là pour vérifier que les tests techniques fonctionnent bien !",
  },
  {
    url: 'https://api.github.com/repos/stadline/js-technical-test/issues/comments/359373428',
    html_url: 'https://github.com/stadline/js-technical-test/issues/2#issuecomment-359373428',
    issue_url: 'https://api.github.com/repos/stadline/js-technical-test/issues/2',
    id: 359373428,
    user: {
      login: 'dbenfouzari',
      id: 1261213,
      avatar_url: 'https://avatars2.githubusercontent.com/u/1261213?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/dbenfouzari',
      html_url: 'https://github.com/dbenfouzari',
      followers_url: 'https://api.github.com/users/dbenfouzari/followers',
      following_url: 'https://api.github.com/users/dbenfouzari/following{/other_user}',
      gists_url: 'https://api.github.com/users/dbenfouzari/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/dbenfouzari/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/dbenfouzari/subscriptions',
      organizations_url: 'https://api.github.com/users/dbenfouzari/orgs',
      repos_url: 'https://api.github.com/users/dbenfouzari/repos',
      events_url: 'https://api.github.com/users/dbenfouzari/events{/privacy}',
      received_events_url: 'https://api.github.com/users/dbenfouzari/received_events',
      type: 'User',
      site_admin: false,
    },
    created_at: '2018-01-22T09:50:20Z',
    updated_at: '2018-01-22T09:50:20Z',
    author_association: 'NONE',
    body: 'Euh... Coucou',
  },
  {
    url: 'https://api.github.com/repos/stadline/js-technical-test/issues/comments/359374172',
    html_url: 'https://github.com/stadline/js-technical-test/issues/2#issuecomment-359374172',
    issue_url: 'https://api.github.com/repos/stadline/js-technical-test/issues/2',
    id: 359374172,
    user: {
      login: 'wlalele',
      id: 6609866,
      avatar_url: 'https://avatars2.githubusercontent.com/u/6609866?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/wlalele',
      html_url: 'https://github.com/wlalele',
      followers_url: 'https://api.github.com/users/wlalele/followers',
      following_url: 'https://api.github.com/users/wlalele/following{/other_user}',
      gists_url: 'https://api.github.com/users/wlalele/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/wlalele/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/wlalele/subscriptions',
      organizations_url: 'https://api.github.com/users/wlalele/orgs',
      repos_url: 'https://api.github.com/users/wlalele/repos',
      events_url: 'https://api.github.com/users/wlalele/events{/privacy}',
      received_events_url: 'https://api.github.com/users/wlalele/received_events',
      type: 'User',
      site_admin: false,
    },
    created_at: '2018-01-22T09:53:18Z',
    updated_at: '2018-01-22T09:53:18Z',
    author_association: 'MEMBER',
    body: '![giphy](https://user-images.githubusercontent.com/6609866/35214729-6cff7636-ff62-11e7-9c60-2d50c77bd915.gif)\r\n',
  },
  {
    url: 'https://api.github.com/repos/stadline/js-technical-test/issues/comments/359377111',
    html_url: 'https://github.com/stadline/js-technical-test/issues/2#issuecomment-359377111',
    issue_url: 'https://api.github.com/repos/stadline/js-technical-test/issues/2',
    id: 359377111,
    user: {
      login: 'armandchard',
      id: 10024518,
      avatar_url: 'https://avatars0.githubusercontent.com/u/10024518?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/armandchard',
      html_url: 'https://github.com/armandchard',
      followers_url: 'https://api.github.com/users/armandchard/followers',
      following_url: 'https://api.github.com/users/armandchard/following{/other_user}',
      gists_url: 'https://api.github.com/users/armandchard/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/armandchard/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/armandchard/subscriptions',
      organizations_url: 'https://api.github.com/users/armandchard/orgs',
      repos_url: 'https://api.github.com/users/armandchard/repos',
      events_url: 'https://api.github.com/users/armandchard/events{/privacy}',
      received_events_url: 'https://api.github.com/users/armandchard/received_events',
      type: 'User',
      site_admin: false,
    },
    created_at: '2018-01-22T10:04:51Z',
    updated_at: '2018-01-22T10:04:51Z',
    author_association: 'NONE',
    body: 'Yo',
  },
];
// affiche moi que les objects comments qui ne sont pas inclue dans le tableau filteredUSer
function sortCommentFiltered(comments, filteredUsers) {
  const filteredComments = [];
  comments.forEach((comment) => {
    if (!filteredUsers.includes(comment.user.login)) {
      filteredComments.push({
        login: comment.user.login,
        avatar_url: comment.user.avatar_url,
        body: comment.body,
        id: comment.user.id,
      });
    }
  });
  console.log(filteredComments);
  return filteredComments;
}
sortCommentFiltered(commentsTest, ['kcz']);
export default sortCommentFiltered;

