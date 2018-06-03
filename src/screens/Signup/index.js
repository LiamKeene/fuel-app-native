import React from "react"

import {
  compose,
  pure,
  withState,
} from "recompose"

import { Mutation } from "react-apollo"

import {
  Alert,
} from "react-native"

import { currentCredentialQuery } from "../../storage"

import SignupScreen from "./components/Signup"
import SIGNUP_MUTATION from "./data/signupMutation"

import Loading from "../../components/Loading"

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

const EnhancedSignup = compose(
  updateEmail,
  updatePassword,
  pure
)(({
  email,
  updateEmail,
  password,
  updatePassword,
  navigation,

  signup,
}) => (
  <SignupScreen
    email={email}
    updateEmail={updateEmail}
    password={password}
    updatePassword={updatePassword}
    submit={signup}
    navigation={navigation} />
))

export default ({ navigation }) => (
  <Mutation
    mutation={SIGNUP_MUTATION}
    update={updateCache}>
    {(signup, {
      loading,
      error,
    }) => ([
      <EnhancedSignup
        key="signup"
        signup={signup}
        navigation={navigation} />,
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
