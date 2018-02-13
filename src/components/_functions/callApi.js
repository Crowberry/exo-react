function callApi(apiUrl) {
  console.log('fetch ...');
  return fetch(apiUrl, { method: 'get' })
    .then(response => response.json());
}

export default callApi;
