function callApi(apiUrl) {
  return fetch(apiUrl, {
    method: 'get',
    headers: { Authorization: 'bearer 30074a16ab1259805556a9dd2514221c1de145c2' },
  })
    .then(response => response.json());
}

function fetchApiURl(url) {
  return callApi(url)
    .then(issue => callApi(issue.comments_url)
      .then(comments => ({ issue, comments })));
}

export default fetchApiURl;
