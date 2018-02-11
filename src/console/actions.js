let responseId = 0
export const addResponse = response => {
  return {
    type: 'ADD_RESPONSE',
    id: responseId++,
    response
  }
}