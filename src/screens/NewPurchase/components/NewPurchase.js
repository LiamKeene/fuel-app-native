import React from "react"

import {
  View
} from "react-native"

import {
  Button,
  Checkbox,
  TextInput
} from "react-native-paper"

import {
  Wrapper,
  FormWrapper
} from "../../../components/Wrappers"

export default ({
  form: {
    odometer,
    quantity,
    filled
  },
  dispatch,
  submit
}) => (
  <Wrapper>
    <View>
      <FormWrapper>
        <Picker>
          <Picker.Item
            key="blank"
            label="Select a vehicle" />
          {vehicles.map(({
            id,
            rego,
            make,
            model
          }) => (
            <Picker.Item
              key={rego}
              label={rego}
              value={id} />
          ))}
        </Picker>
        <TextInput
          label="Odometer"
          value={odometer}
          onChange={e => dispatch({ type: "UPDATE_INPUT", name: "odometer", value: e.nativeEvent.text })} />
        <TextInput
          label="Quantity"
          value={quantity}
          onChange={e => dispatch({ type: "UPDATE_INPUT", name: "quantity", value: e.nativeEvent.text })} />
        <Checkbox
          label="Filled"
          value={filled}
          onPress={e => dispatch({ type: "UPDATE_INPUT", name: "filled", value: e.nativeEvent.checked })} />
        <Button
          primary
          raised
          onPress={async () => await submit({ variables: { odometer, quantity, filled } })}>
          Save
        </Button>
      </FormWrapper>
    </View>
  </Wrapper>
)
