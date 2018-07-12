import React from "react"

import {
  View
} from "react-native"

import {
  Divider,
  ListItem,
} from "react-native-paper"

export default ({ navigation, vehicles }) => (
  <View>
    {vehicles.map(({
      id,
      rego,
      make,
      model
    }) => ([
      <ListItem
        key={rego}
        title={rego}
        description={`${make} ${model}`}
        onPress={() => navigation.navigate("VehicleForm", {
          id
        })} />,
      <Divider
        key={`divider-${rego}`} />
    ]))}
  </View>
)
