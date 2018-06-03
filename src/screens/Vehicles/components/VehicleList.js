import React from "react"

import {
  View
} from "react-native"

import {
  Divider,
  ListItem,
} from "react-native-paper"

export default ({ vehicles }) => (
  <View>
    {vehicles.map(({
      rego,
      make,
      model
    }) => ([
      <ListItem
        key={rego}
        title={rego}
        description={`${make} ${model}`} />,
      <Divider
        key={`divider-${rego}`} />
    ]))}
  </View>
)
