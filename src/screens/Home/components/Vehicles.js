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

import {
  Button
} from "react-native-paper"

import Tile from "../../../components/Tile"

const ListVehicles = ({
  vehicles,
  navigation: {
    navigate
  }
}) => (
  <Tile>
    <Text>My Vehicles</Text>
    <Picker>
      <Picker.Item
        key="blank"
        label="Select a vehicle" />
      {vehicles.map(vehicle => (
        <Picker.Item
          key={vehicle.rego}
          label={vehicle.rego}
          value={vehicle.id} />
      ))}
    </Picker>
    <Button
      onPress={() => navigate("Vehicle")}>
      Add New
    </Button>
  </Tile>
)

const NoVehicles = ({ navigation }) => (
  <Tile>
    <Text
      onPress={() => navigation.navigate("Vehicle")}>
      Click here to create one
    </Text>
  </Tile>
)

const displayVehicles = branch(
  ({ vehicles }) => vehicles && vehicles.length > 0,
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
