import React from "react"

import { Query } from "react-apollo"

import { Text, View } from "react-native"

import Tile from "../../components/Tile"

import Vehicles from "./components"
import VEHICLES_QUERY from "./data/vehiclesQuery"

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
