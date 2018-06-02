import React from "react"

import {
  View
} from "react-native"

export const Wrapper = ({ children }) => (
  <View
    style={{
      alignItems: "center",
      flex: 1,
      justifyContent: "center",
    }}>
    {children}
  </View>
)

export const FormWrapper = ({ children }) => (
  <View
    style={{
      justifyContent: "center",
      width: 300,
    }}>
    {children}
  </View>
)
