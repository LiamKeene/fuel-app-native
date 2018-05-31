import React from "react"

import styled from "styled-components"

import {
  View
} from "react-native"

import {
  Button,
  Text,
  TextInput
} from "react-native-paper"

const Wrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

const FormWrapper = styled.View`
  justify-content: center;
  width: 250;
`

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
    <Text>
      Already have an account?
      <Text
        onPress={() => navigation.navigate("Login")}>
        Click here
      </Text>
    </Text>
  </Wrapper>
)
