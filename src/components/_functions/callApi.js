function callApi(apiUrl) {
  return fetch(apiUrl, { method: 'get' })
    .then(response => response.json());
}

function fetchApiURl(url) {
  return callApi(url)
    .then(issue => callApi(issue.comments_url)
      .then((comments) => {
        console.log(issue, comments);
        return { issue, comments };
      }));
}

export default fetchApiURl;
