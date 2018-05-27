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

}) => (
  <View>
    <FormLabel>
      Registration Number
    </FormLabel>
    <FormInput
      value={rego}
      placeholder="Enter the vehicle registration: ABC-123"
      onChange={updateRego} />
    <FormLabel>
      Make
    </FormLabel>
    <FormInput
      value={make}
      placeholder="Enter the vehicle make: Toyota"
      onChange={updateMake} />
    <FormLabel>
      Model
    </FormLabel>
    <FormInput
      value={model}
      placeholder="Enter the vehicle model: Corolla"
      onChange={updateModel} />
    <Button
      title="Save"
      onPress={async () => await submit({ variables: { rego, make, model } })} />
  </View>
)
