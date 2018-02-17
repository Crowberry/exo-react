const token = process.env.REACT_APP_TOKEN;
console.log(process.env);

function callApi(apiUrl) {
  return fetch(apiUrl, {
    method: 'get',
    headers: { Authorization: `bearer ${token}` },
  })
    .then(response => response.json());
}

function fetchApiURl(url) {
  return callApi(url)
    .then(issue => callApi(issue.comments_url)
      .then(comments => ({ issue, comments })));
}

export default fetchApiURl;
