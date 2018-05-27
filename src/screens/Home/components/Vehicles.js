import React from "react"

import {
  branch,
  compose,
  pure,
  renderComponent
} from "recompose"

import {
  Text,
  View
} from "react-native"

const ListVehicles = () => (
  <View>
    <Text>List of Vehicles</Text>
  </View>
)

const NoVehicles = () => (
  <View>
    <Text>No vehicles, sad</Text>
  </View>
)

const displayVehicles = branch(
  ({ vehicles }) => vehicles.length > 0,
  renderComponent(ListVehicles),
  renderComponent(NoVehicles)
)

const Vehicles = () => (
  <View>
    <Text>wew lad</Text>
  </View>
)

export default compose(
  displayVehicles,
  pure
)(Vehicles)
