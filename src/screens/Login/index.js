import React from "react"

import { Mutation } from "react-apollo"

import { Alert } from "react-native"

import { currentCredentialQuery } from "../../storage"

import LoginScreen from "./components/Login"
import LOGIN_MUTATION from "./data/loginMutation"

import Loading from "../../components/Loading"

const updateCache = async (cache, { data: { login } }) => {
  const credentials = {
    email: login.email,
    jwt: login.jwt,
    profile: login.profile,
    __typename: "Credential"
  }
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
