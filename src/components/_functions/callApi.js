// function callApi(apiUrl) {
//   return fetch(apiUrl, { method: 'get' })
//     .then(response => response.json());
// }

// function fetchApiURl(url) {
//   return callApi(url)
//     .then(data => callApi(data.comments_url))
//     .then(response => console.log(response));
// }

const fetchApiURl = async (url) => {
  const responseIssue = await fetch(url, { method: 'get' });
  const issue = await responseIssue.json();

  const responseComments = await fetch(issue.comments_url, { method: 'get' });
  const comments = await responseComments.json();

  return { issue, comments };
};

export default fetchApiURl;
