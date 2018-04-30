import React from "react"

import {
  Button,
  View
} from "react-native"

import {
  FormLabel,
  FormInput
} from "react-native-elements"

export default () => (
  <View>
    <FormLabel>
      Registration Number
    </FormLabel>
    <FormInput
      placeholder="Enter the vehicle registration: ABC-123" />
    <FormLabel>
      Make
    </FormLabel>
    <FormInput
      placeholder="Enter the vehicle make: Toyota" />
    <FormLabel>
      Model
    </FormLabel>
    <FormInput
      placeholder="Enter the vehicle model: Corolla" />
    <Button
      title="Save"
      onPress={() => console.log("Hello there")} />
  </View>
)
