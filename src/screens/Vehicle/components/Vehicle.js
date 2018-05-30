import React from "react"

import {
  Button,
  View
} from "react-native"

import {
  FormLabel,
  FormInput
} from "react-native-elements"

export default ({
  form,

  updateForm
}) => {
  console.log("form",  form)
  console.log("updateForm",  updateForm)
  return (
    <View>
      <FormLabel>
        Registration Number
      </FormLabel>
      <FormInput
        value={form.rego}
        placeholder="Enter the vehicle registration: ABC-123"
        onChange={e => updateForm({ name: "rego", value: e.nativeEvent.text })} />
      <FormLabel>
        Make
      </FormLabel>
      <FormInput
        value={form.make}
        placeholder="Enter the vehicle make: Toyota"
        onChange={e => updateForm({ name: "make", value: e.nativeEvent.text })} />
      <FormLabel>
        Model
      </FormLabel>
      <FormInput
        value={form.model}
        placeholder="Enter the vehicle model: Corolla"
        onChange={e => updateForm({ name: "model", value: e.nativeEvent.text })} />
      <Button
        title="Save"
        onPress={async () => await submit({ variables: { rego, make, model } })} />
    </View>
  )
}
