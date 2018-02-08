const makeApiRequest = (method, url) => {
  const init = {
    method: method
  }
  return fetch(url, init)
    .then(response => response.json())
    .then(json => JSON.stringify(json, null, 2))
}

export default makeApiRequest
