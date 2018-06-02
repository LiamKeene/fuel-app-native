import React from "react"

import {
  branch,
  compose,
  pure,
  renderComponent,
  withReducer,
} from "recompose"

import { Query } from "react-apollo"

import {
  Text,
  View
} from "react-native"

import Tile from "../../components/Tile"

import VehiclesList from "./components/VehicleList"
import NoVehicles from "./components/NoVehicles"
import VEHICLES_QUERY from "./data/vehiclesQuery"

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

export default ({ navigation }) => (
  <Query
    query={VEHICLES_QUERY}>
    {({
      loading,
      error,
      data: {
        getVehicles
      }
    }) => (
      <Vehicles
        vehicles={getVehicles}
        navigation={navigation} />
    )}
  </Query>
)
