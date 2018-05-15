import React from "react"

import { graphql, Mutation } from "react-apollo"
import { withState, pure, compose } from "recompose"

import SignupScreen from "./components/Signup"
import SIGNUP_MUTATION from "./data/signupMutation"

const updateEmail     = withState("email", "updateEmail", "")
const updatePassword  = withState("password", "updatePassword", "")

const Signup = compose(
  pure,
  updateEmail,
  updatePassword
)(SignupScreen)

const SignupWithData = props => (
  <Mutation
    mutation={SIGNUP_MUTATION}>
    {(signup, props) => (
      <Signup
        submit={({ email, password }) => (
          signup({ variables: { email, password } })
        )}
        {...props} />
    )}
  </Mutation>
)

export default SignupWithData
