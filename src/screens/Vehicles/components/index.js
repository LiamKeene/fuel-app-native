import React from "react"

import { branch, compose, pure, renderComponent } from "recompose"

import VehiclesList from "./VehicleList"
import NoVehicles from "./NoVehicles"

const displayVehicles = branch(
  ({ vehicles }) => vehicles && vehicles.length > 0,
  renderComponent(VehiclesList),
  renderComponent(NoVehicles)
)

const Vehicles = compose(
  displayVehicles,
  pure
)(() => (
  <View />
))

export default ({ vehicles, navigation }) => (
  <Vehicles
    vehicles={vehicles}
    navigation={navigation} />
)
