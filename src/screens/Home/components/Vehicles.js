import React from "react"

import {
  branch,
  compose,
  pure,
  renderComponent
} from "recompose"

import {
  Picker,
  View
} from "react-native"

import {
  Button,
  Text,
} from "react-native-paper"

import Tile from "../../../components/Tile"

const ListVehicles = ({
  vehicles,
  selectedVehicle,
  onChange,
  navigation: {
    navigate
  }
}) => (
  <Tile>
    <Text>My Vehicles</Text>
    <Picker
      selectedValue={selectedVehicle}
      onValueChange={value => onChange(value)}>
      <Picker.Item
        key="blank"
        label="Select a vehicle" />
      {vehicles.map(({
        id,
        rego,
        make,
        model
      }) => (
        <Picker.Item
          key={rego}
          label={rego}
          value={id} />
      ))}
    </Picker>
      <Button
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          justifyContent: "flex-end"
        }}
        onPress={() => navigate("VehicleForm")}>
        Add New
      </Button>
  </Tile>
)

const NoVehicles = ({ navigation }) => (
  <Tile>
    <Button
      style={{
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "flex-end"
      }}
      onPress={() => navigation.navigate("VehicleForm")}>
      Click here to create one
    </Button>
  </Tile>
)

const displayVehicles = branch(
  ({ vehicles }) => vehicles && vehicles.length > 0,
  renderComponent(ListVehicles),
  renderComponent(NoVehicles)
)

export default compose(
  displayVehicles,
  pure
)(<div />)
