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
    <FormWrapper>
      <FormLabel>
        Email Address
      </FormLabel>
      <FormInput
        value={email}
        onChange={e => updateEmail(e.nativeEvent.text)} />
      <FormLabel>
        Password
      </FormLabel>
      <FormInput
        value={password}
        onChange={e => updatePassword(e.nativeEvent.text)} />
      <Button
        dark
        title="Signup"
        onPress={() => submit({ email, password })} />
    </FormWrapper>
  </View>
)
