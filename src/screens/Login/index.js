import React from "react"

import { Mutation } from "react-apollo"

import { withState, pure, compose } from "recompose"

import { currentCredentialQuery } from "../../storage"

import LoginScreen from "./components/Login"
import LOGIN_MUTATION from "./data/loginMutation"

const updateEmail     = withState("email", "updateEmail", "")
const updatePassword  = withState("password", "updatePassword", "")

const updateCache = async (cache, { data: { login } }) => {
  const credentials = {
    email: login.email,
    jwt: login.jwt,
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
  updatePassword,
  navigation,
}) => (
  <Mutation
    mutation={LOGIN_MUTATION}
    update={updateCache}>
    {(login, {
      called,
      loading,
      error,
      data
    }) => (
      <LoginScreen
        email={email}
        updateEmail={updateEmail}
        password={password}
        updatePassword={updatePassword}
        submit={async (props) => {
          res = await login(props)
          navigation.navigate("Home")
        }}
        navigation={navigation}
        {...{
          called,
          loading,
          error,
          data
        }} />
    )}
  </Mutation>
))
