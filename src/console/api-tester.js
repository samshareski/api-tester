const makeApiRequest = (method, url) => {
  const init = {
    method: method
  }
  const result = {}

  return fetch(url, init)
    .then(response => {
      result.ok = response.ok
      return response.json()
    })
    .then(json => {
      result.json = JSON.stringify(json, null, 2)
      return result
    })
}

export default makeApiRequest
