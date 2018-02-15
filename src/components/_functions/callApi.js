function callApi(apiUrl) {
  return fetch(apiUrl, {
    method: 'get',
    headers: { AUthorization: 'bearer dac2add226a7fd941cae16e7800bf65d2bc2f850' },
  })
    .then(response => response.json());
}

function fetchApiURl(url) {
  return callApi(url)
    .then(issue => callApi(issue.comments_url)
      .then(comments => ({ issue, comments })));
}

export default fetchApiURl;
