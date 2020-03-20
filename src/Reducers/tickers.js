const initialState = {
  list: []
}

const myTickersList = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_TICKER':
      return {
        ...state,
      }
    case 'REMOVE_TICKER':
      return {
        ...state,
      }
    default:
      return state
  }
}

export default myTickersList