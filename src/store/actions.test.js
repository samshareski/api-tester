import { addResponse } from './actions'

describe('addResponse', () => {
  it('creates an ADD_RESPONSE action object', () => {
    const response = { ok: true, json: '{ "foo": "bar" }' }

    expect(addResponse(response)).toEqual({
      type: 'ADD_RESPONSE',
      response
    })
  })
})
