import React from "react"
import { compose, pure, withState } from "recompose"

import { View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"

import { Wrapper, FormWrapper } from "../../../components/Wrappers"

export const SignupForm = ({ email, password, updateEmail, updatePassword, onSubmit, onNavigateToLogin }) => (
  <Wrapper>
    <View>
      <FormWrapper>
        <TextInput
          label="Email Address"
          value={email}
          onChange={updateEmail} />
        <TextInput
          secureTextEntry
          label="Password"
          value={password}
          onChange={updatePassword} />
        <Button
          primary
          raised
          onPress={onSubmit}>
          Signup
        </Button>
      </FormWrapper>
    </View>
    <Text
      onPress={onNavigateToLogin}>
      Already have an account? Click here
    </Text>
  </Wrapper>
)

const updateEmail     = withState("email", "updateEmail", "")
const updatePassword  = withState("password", "updatePassword", "")

export default compose(
  updateEmail,
  updatePassword,
  pure
)(({ email, updateEmail, password, updatePassword, submit, onNavigateToLogin }) => (
  <SignupForm
    email={email}
    password={password}
    updateEmail={e => updateEmail(e.nativeEvent.text)}
    updatePassword={e => updatePassword(e.nativeEvent.text)}
    onSubmit={async () => await submit({ variables: { email, password } })}
    onNavigateToLogin={onNavigateToLogin} />
))
