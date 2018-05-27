import React from "react"

import styled from "styled-components"

import {
  Alert,
  Button,
  Text,
  View
} from "react-native"

import {
  FormLabel,
  FormInput
} from "react-native-elements"

const Wrapper = styled.View`
  align-items: center;
  flex: 1;
  justify-content: center;
`

const FormWrapper = styled.View`
  justify-content: center;
  flex: 0.8;
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
        <FormLabel>
          Email Address
        </FormLabel>
        <FormInput
          value={email}
          onChange={e => updateEmail(e.nativeEvent.text)} />
        <FormLabel>
          Password
        </FormLabel>
        <FormInput
          value={password}
          onChange={e => updatePassword(e.nativeEvent.text)} />
        <Button
          dark
          title="Login"
          onPress={async () => await submit({ variables: { email, password } })} />
      </FormWrapper>
      <Text>
        Need an account?
        <Text
          onPress={() => navigation.navigate("Signup")}>
          Click here
        </Text>
      </Text>
    </View>
  </Wrapper>
)
