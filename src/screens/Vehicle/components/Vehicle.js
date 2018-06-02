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
  form,

  updateForm
}) => (
  <Wrapper>
    <View>
      <FormWrapper>
        <TextInput
          label="Registration Number"
          value={form.rego}
          placeholder="Enter the vehicle registration: ABC-123"
          onChange={e => updateForm({ name: "rego", value: e.nativeEvent.text })} />
        <TextInput
          label="Make"
          value={form.make}
          placeholder="Enter the vehicle make: Toyota"
          onChange={e => updateForm({ name: "make", value: e.nativeEvent.text })} />
        <TextInput
          label="Model"
          value={form.model}
          placeholder="Enter the vehicle model: Corolla"
          onChange={e => updateForm({ name: "model", value: e.nativeEvent.text })} />
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
