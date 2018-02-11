import { store } from '../store/store'
import { addResponse } from '../store/actions'

const makeApiRequest = async formData => {
  let init = {
    method: formData.method,
    mode: 'cors'
  }
  if (formData.method === 'POST' || formData.method === 'PUT') {
    init = {
      ...init,
      body: formData.body,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }
  }

  const response = await fetch(formData.url, init)
  const json = await response.json()
  const jsonString = JSON.stringify(json, null, 2)

  store.dispatch(
    addResponse({
      url: formData.url,
      method: formData.method,
      body: formData.body,
      response: jsonString
    })
  )

  store.dispatch(
    addResponse(
      {
        url: formData.url,
        method: formData.method,
        body: formData.body,
        response: json
      })
    )

  return {
    ok: response.ok,
    json: jsonString
  }
}

export default makeApiRequest
