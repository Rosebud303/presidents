export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'IS_LOADING':
      return action.boolean
    default:
      return state
  }
}

export const errorReducer = (state = '', action) => {
  switch (action.type) {
    case 'HAS_ERRORED':
      return action.message
    default:
      return state
  }
}

export const setPresidentsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_PRESIDENTS':
      return action.presidents
    default:
      return state
  }
}