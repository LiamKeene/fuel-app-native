import createReducer from "./createReducer"

export const inputReducer = (initialState, actionCreator) => createReducer(initialState)({
  [actionCreator]: (state, action) => ({ ...state, [action.name]: action.value })
})
