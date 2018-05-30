import React from "react"

import {
  View
} from "react-native"

export default ({ children }) => (
  <View
    style={{
      backgroundColor: "white",
      elevation: 8,
      padding: 16,
      margin: 8,
      shadowOffset: { width: 40, height: 40 },
      shadowColor: "#ccc",
      shadowRadius: 4,
    }}>
    {children}
  </View>
)
