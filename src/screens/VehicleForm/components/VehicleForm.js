import React from "react"
import { compose, pure } from "recompose"

import { View } from "react-native"
import { Button, TextInput } from "react-native-paper"

import { Wrapper, FormWrapper } from "../../../components/Wrappers"
import Tile from "../../../components/Tile"
import { formReducer } from "../../../components/FormHOCs"

export const VehicleForm = ({ form: { rego, make, model }, dispatch, submit }) => (
  <View>
    <Tile>
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
    </Tile>
  </View>
)

export default compose(
  formReducer({ rego: "", make: "", model: "" }),
  pure,
)(({ dispatch, form, submit }) => (
  <VehicleForm
    dispatch={dispatch}
    form={form}
    submit={submit} />
))
