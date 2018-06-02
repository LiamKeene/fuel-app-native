import React from "react"

import {
  View
} from "react-native"

import {
  Button,
  Text,
  TextInput
} from "react-native-paper"

import {
  Wrapper,
  FormWrapper
} from "../../../components/Wrappers"

export default ({
  email,
  password,
  updateEmail,
  updatePassword,
  submit,

  navigation,
}) => (
  <Wrapper>
    <View>
      <FormWrapper>
        <TextInput
          label="Email Address"
          value={email}
          onChange={e => updateEmail(e.nativeEvent.text)} />
        <TextInput
          secureTextEntry
          label="Password"
          value={password}
          onChange={e => updatePassword(e.nativeEvent.text)} />
        <Button
          primary
          raised
          onPress={async () => await submit({ variables: { email, password } })}>
          Signup
        </Button>
      </FormWrapper>
    </View>
    <Text
      onPress={() => navigation.navigate("Login")}>
      Already have an account? Click here
    </Text>
  </Wrapper>
)
