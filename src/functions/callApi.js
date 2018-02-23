const token = process.env.REACT_APP_TOKEN;

function callApi(apiUrl, method, body) {
  return fetch(apiUrl, {
    method,
    headers: { Authorization: `bearer ${token}` },
    body,
  })
    .then(response => response.json());
}

function fetchApiUrl(url) {
  return callApi(url, 'get')
    .then(issue => callApi(issue.comments_url)
      .then(comments => ({ issue, comments })));
}

export { callApi, fetchApiUrl };
