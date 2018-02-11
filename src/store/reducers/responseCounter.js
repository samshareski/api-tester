const initialState = {
  successCount: 0,
  totalCount: 0
}

const responseCounter = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_RESPONSE':
      const successCount = action.response.ok
        ? state.successCount + 1
        : state.successCount
      const totalCount = state.totalCount + 1
      return {
        successCount,
        totalCount
      }
    case 'RESET_SUCCESS_RATE':
      return initialState
    default:
      return state
  }
}

export default responseCounter
