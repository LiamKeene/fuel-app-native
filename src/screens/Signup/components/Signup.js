import React from "react"

import styled from "styled-components"

import {
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

  called,
  loading,
  error,
}) => (
  <Wrapper>
    <View
      key="form">
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
          title="Signup"
          onPress={async () => await submit({ email, password })} />
      </FormWrapper>
    </View>
    {loading && <View key="loading"><Text>Loading!</Text></View>}
    {error && (
      <View key="error">
        {error.graphQLErrors.map(({ message }, i) => (
          <Text
            key={i}>
            {message}
          </Text>
        ))}
      </View>
    )}
  </Wrapper>
)
