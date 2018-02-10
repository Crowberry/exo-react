const API = "https://api.github.com/repos/nodejs/node/issues/6867";

function callApi(apiUrl) {

    if (!apiUrl) {
        apiUrl = API;
    }

    console.log('fetch ...');
    return fetch(apiUrl, { method: "get" })
      .then(response => response.json())

}

export default callApi;