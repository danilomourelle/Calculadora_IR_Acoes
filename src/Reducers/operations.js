const initialState = {
  operationsLog: []
}

const operation = (state = initialState, action) => {
  let tickerCopy
  switch (action.type) {
    case 'ADD_NEW_OPERATION':
      return {
        ...state,
      }
    case 'REMOVE_OPERATION':
      return {
        ...state,
      }
    case 'EDIT_OPERATION':
      return {
        ...state
      }
    default:
      return state
  }
}

export default operation