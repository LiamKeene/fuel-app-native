import React from "react"

import { Mutation } from "react-apollo"

import { Alert } from "react-native"

import { currentCredentialQuery } from "../../getCurrentCredentials"

import SignupScreen from "./components/Signup"
import SIGNUP_MUTATION from "./data/signupMutation"

import Loading from "../../components/Loading"

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

export default ({ navigation }) => (
  <Mutation
    mutation={SIGNUP_MUTATION}
    update={updateCache}>
    {(signup, {
      loading,
      error,
    }) => ([
      <SignupScreen
        key="signup"
        submit={signup}
        onNavigateToLogin={() => navigation.navigate("Login")} />,
      <Loading
        key="loader"
        visible={loading}
        message="Signing you up ..." />,
      (error && (
        Alert.alert(
          "There were errors signing up",
          error.graphQLErrors.map(({ message }) => message).join(", ")
        )
      ))
    ])}
  </Mutation>
)
