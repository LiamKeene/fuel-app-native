import React from "react"

import {
  View
} from "react-native"

import {
  Button,
  TextInput
} from "react-native-paper"

import {
  Wrapper,
  FormWrapper
} from "../../../components/Wrappers"

export default ({
  form: {
    firstName,
    lastName,
    avatar
  },
  dispatch,
  submit
}) => (
  <Wrapper>
    <View>
      <FormWrapper>
        <TextInput
          label="First Name"
          value={firstName}
          onChange={e => dispatch({ type: "UPDATE_INPUT", name: "firstName", value: e.nativeEvent.text })} />
        <TextInput
          label="Last Name"
          value={lastName}
          onChange={e => dispatch({ type: "UPDATE_INPUT", name: "lastName", value: e.nativeEvent.text })} />
        <TextInput
          label="Avatar"
          value={avatar}
          onChange={e => dispatch({ type: "UPDATE_INPUT", name: "avatar", value: e.nativeEvent.text })} />
        <Button
          primary
          raised
          onPress={async () => await submit({ variables: { firstName, lastName, avatar } })}>
          Save
        </Button>
      </FormWrapper>
    </View>
  </Wrapper>
)
