import {
  SUBMIT_SIGNUP,
  UPDATE_INPUT
} from "./constants"

export const submitSignup = ({ email, password }) => ({
  type: SUBMIT_SIGNUP,
  email,
  password
})

export const updateInput = ({ name, value }) => ({
  type: UPDATE_INPUT,
  name,
  value
})
