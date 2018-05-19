import React from "react"

import { Mutation } from "react-apollo"

import { withState, pure, compose } from "recompose"

import { currentCredentialQuery } from "../../storage"

import SignupScreen from "./components/Signup"
import SIGNUP_MUTATION from "./data/signupMutation"

const updateEmail     = withState("email", "updateEmail", "")
const updatePassword  = withState("password", "updatePassword", "")

const updateCache = async (cache, { data: { signup } }) => {
  const credentials = {
    email: signup.email,
    jwt: signup.jwt,
    __typename: "Credential"
  }

  cache.writeQuery({
    query: currentCredentialQuery,
    data: { credentials }
  })
}

export default compose(
  pure,
  updateEmail,
  updatePassword
)(({
  email,
  updateEmail,
  password,
  updatePassword
}) => (
  <Mutation
    mutation={SIGNUP_MUTATION}
    update={updateCache}>
    {(signup, {
      called,
      loading,
      error,
      data
    }) => (
      <SignupScreen
        email={email}
        updateEmail={updateEmail}
        password={password}
        updatePassword={updatePassword}
        submit={signup}
        {...{
          called,
          loading,
          error,
          data
        }} />
    )}
  </Mutation>
))
