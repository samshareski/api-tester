export const addResponse = response => {
  return {
    type: 'ADD_RESPONSE',
    response
  }
}

export const resetSuccessRate = () => {
  return {
    type: 'RESET_SUCCESS_RATE'
  }
}
