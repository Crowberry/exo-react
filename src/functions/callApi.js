const token = process.env.REACT_APP_TOKEN;

function callApi(apiUrl) {
  return fetch(apiUrl, {
    method: 'get',
    headers: { Authorization: `bearer ${token}` },
  })
    .then(response => response.json());
}

function fetchApiUrl(url) {
  return callApi(url)
    .then(issue => callApi(issue.comments_url)
      .then(comments => ({ issue, comments })));
}

export default fetchApiUrl;
