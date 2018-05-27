import React from "react"

import { Mutation } from "react-apollo"

import {
  Alert,
} from "react-native"

import {
  compose,
  pure,
  withState,
} from "recompose"

import { currentCredentialQuery } from "../../storage"

import LoginScreen from "./components/Login"
import LOGIN_MUTATION from "./data/loginMutation"

import Loading from "../../components/Loading"

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

const EnhancedLogin = compose(
  updateEmail,
  updatePassword,
  pure
)(({
  email,
  updateEmail,
  password,
  updatePassword,
  navigation,

  login
}) => (
  <LoginScreen
    email={email}
    updateEmail={updateEmail}
    password={password}
    updatePassword={updatePassword}
    submit={login}
    navigation={navigation} />
))

export default ({ navigation }) => (
  <Mutation
    mutation={LOGIN_MUTATION}
    update={updateCache}>
    {(login, {
      loading,
      error,
    }) => ([
      <EnhancedLogin
        login={login}
        navigation={navigation} />,
      <Loading
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
