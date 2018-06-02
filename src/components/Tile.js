import React from "react"

import {
  Paper
} from "react-native-paper"

export default ({ children }) => (
  <Paper
    style={{
      elevation: 8,
      padding: 16,
      margin: 8,
    }}>
    {children}
  </Paper>
)
