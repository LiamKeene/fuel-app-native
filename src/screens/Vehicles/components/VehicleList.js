import React from "react"

import {
  Text,
  View
} from "react-native"

export default ({ vehicles }) => (
  <View>
    {vehicles.map(({
      rego,
      make,
      model
    }) => (
      <View
        key={rego}>
        <Text>
          {rego}
        </Text>
      </View>
    ))}
  </View>
)
