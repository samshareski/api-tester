const historyList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESPONSE':
      return [
        ...state,
        {
          response: action.response
        }
      ]
    default:
      return state
  }
}

export default historyList
