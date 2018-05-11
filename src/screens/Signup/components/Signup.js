import React from "react"

import styled from "styled-components"

import {
  Button,
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

export default () => (
  <Wrapper>
    <View>
      <FormWrapper>
        <FormLabel>
          Email Address
        </FormLabel>
        <FormInput />
        <FormLabel>
          Password
        </FormLabel>
        <FormInput />
        <Button
          dark
          title="Signup"
          onPress={() => console.log("Hello email")} />
      </FormWrapper>
    </View>
  </Wrapper>
)
