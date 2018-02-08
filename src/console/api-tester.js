const makeApiRequest = async (method, url) => {
  const init = {
    method: method
  }

  const response = await fetch(url, init)
  const json = await response.json()

  return {
    ok: response.ok,
    json: JSON.stringify(json, null, 2)
  }
}

export default makeApiRequest
