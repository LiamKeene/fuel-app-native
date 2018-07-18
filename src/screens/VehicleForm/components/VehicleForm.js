import React from "react"
import { compose, pure } from "recompose"

import { View } from "react-native"
import { Button, TextInput } from "react-native-paper"

import { Wrapper, FormWrapper } from "../../../components/Wrappers"
import Tile from "../../../components/Tile"
import { formReducer } from "../../../components/FormHOCs"

export const VehicleForm = ({ form: { rego, make, model }, onChange, submit }) => (
  <View>
    <Tile>
      <FormWrapper>
        <TextInput
          label="Registration Number"
          value={rego}
          placeholder="Enter the vehicle registration: ABC-123"
          onChange={e => onChange({ name: "rego", value: e.nativeEvent.text })} />
        <TextInput
          label="Make"
          value={make}
          placeholder="Enter the vehicle make: Toyota"
          onChange={e => onChange({ name: "make", value: e.nativeEvent.text })} />
        <TextInput
          label="Model"
          value={model}
          placeholder="Enter the vehicle model: Corolla"
          onChange={e => onChange({ name: "model", value: e.nativeEvent.text })} />
        <Button
          primary
          raised
          onPress={submit}>
          Save
        </Button>
      </FormWrapper>
    </Tile>
  </View>
)

export default ({ form, submit }) => {
  const Component = compose(
    formReducer(form),
    pure
  )(({ dispatch, form }) => (
    <VehicleForm
      onChange={({ name, value }) => (
        dispatch({ type: "UPDATE_INPUT", name, value })
      )}
      form={form}
      submit={() => (
        submit(form)
      )} />
  ))

  return <Component form={form} />
}
