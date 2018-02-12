function callApi(apiUrl) {

    return fetch(apiUrl, { method: "get" })
      .then(response => response.json())

}

export default callApi;