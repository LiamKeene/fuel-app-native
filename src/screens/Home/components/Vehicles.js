import React from "react"

import {
  branch,
  compose,
  pure,
  renderComponent
} from "recompose"

import {
  Picker,
  Text,
  View
} from "react-native"

import Tile from "../../../components/Tile"

const ListVehicles = ({ vehicles }) => (
  <Tile>
    <Text>My Vehicles</Text>
    <Picker>
      {vehicles.map(vehicle => (
        <Picker.Item
          label={vehicle.rego}
          value={vehicle.id} />
      ))}
    </Picker>
  </Tile>
)

const NoVehicles = ({ navigation }) => (
  <Tile>
    <Text
      onPress={() => navigation.navigate("Vehicle")}
      >Click here</Text>
    <Text>to create one</Text>
  </Tile>
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
