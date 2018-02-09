const API = "https://api.github.com/repos/stadline/js-technical-test/issues/2";

function callApi(apiUrl) {

    if (!apiUrl) {
        apiUrl = API;
    }

    console.log('fetch ...');
    return fetch(apiUrl, { method: "get" })
      .then(response => response.json())

}

export default callApi;