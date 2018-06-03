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
    rego,
    make,
    model
  },
  dispatch,
  submit
}) => (
  <Wrapper>
    <View>
      <FormWrapper>
        <TextInput
          label="Registration Number"
          value={rego}
          placeholder="Enter the vehicle registration: ABC-123"
          onChange={e => dispatch({ type: "UPDATE_INPUT", name: "rego", value: e.nativeEvent.text })} />
        <TextInput
          label="Make"
          value={make}
          placeholder="Enter the vehicle make: Toyota"
          onChange={e => dispatch({ type: "UPDATE_INPUT", name: "make", value: e.nativeEvent.text })} />
        <TextInput
          label="Model"
          value={model}
          placeholder="Enter the vehicle model: Corolla"
          onChange={e => dispatch({ type: "UPDATE_INPUT", name: "model", value: e.nativeEvent.text })} />
        <Button
          primary
          raised
          onPress={async () => await submit({ variables: { rego, make, model } })}>
          Save
        </Button>
      </FormWrapper>
    </View>
  </Wrapper>
)
