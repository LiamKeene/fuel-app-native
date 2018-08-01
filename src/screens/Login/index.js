import React from "react"

import { Mutation } from "react-apollo"

import { Alert } from "react-native"

import { saveCredentials } from "../../applicationStorage"
import { currentCredentialQuery } from "../../getCurrentCredentials"

import LoginScreen from "./components/Login"
import LOGIN_MUTATION from "./data/loginMutation"

import Loading from "../../components/Loading"

const updateCache = async (cache, { data: { login } }) => {
  const credentials = saveCredentials(login)
  cache.writeQuery({
    query: currentCredentialQuery,
    data: { credentials }
  })
}

export default ({ navigation }) => (
  <Mutation
    mutation={LOGIN_MUTATION}
    update={updateCache}>
    {(login, {
      loading,
      error,
    }) => ([
      <LoginScreen
        key="login"
        submit={async ({ email, password }) => await login({ variables: { email, password } })}
        onNavigateToSignup={() => navigation.navigate("Signup")} />,
      <Loading
        key="loader"
        visible={loading}
        message="Logging you in ..." />,
      (error && (
        Alert.alert(
          "There were errors logging in",
          error.graphQLErrors.map(({ message }) => message).join(", ")
        )
      ))
    ])}
  </Mutation>
)
