import React from "react"
import { compose, pure, withState } from "recompose"

import { View } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"

import { Wrapper, FormWrapper } from "../../../components/Wrappers"

export const LoginForm = ({ email, password, updateEmail, updatePassword, onSubmit, onNavigateToSignup }) => (
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
          Login
        </Button>
      </FormWrapper>
    </View>
    <Text
      onPress={onNavigateToSignup}>
      Need an account? Click here
    </Text>
  </Wrapper>
)

const updateEmail     = withState("email", "updateEmail", "")
const updatePassword  = withState("password", "updatePassword", "")

export default compose(
  updateEmail,
  updatePassword,
  pure
)(({ email, updateEmail, password, updatePassword, submit, onNavigateToSignup }) => (
  <LoginForm
    email={email}
    password={password}
    updateEmail={e => updateEmail(e.nativeEvent.text)}
    updatePassword={e => updatePassword(e.nativeEvent.text)}
    onSubmit={() => submit({ email, password })}
    onNavigateToSignup={onNavigateToSignup} />
))
