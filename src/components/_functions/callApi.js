function callApi(apiUrl) {
  return fetch(apiUrl, {
    method: 'get',
    headers: { Authorization: 'bearer ce3e455dd3acb7960f7e48713d2cacfbe97cc697' },
  })
    .then(response => response.json());
}

function fetchApiURl(url) {
  return callApi(url)
    .then(issue => callApi(issue.comments_url)
      .then(comments => ({ issue, comments })));
}

export default fetchApiURl;
