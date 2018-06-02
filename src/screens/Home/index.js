import React from "react"

import {
  Text,
  View
} from "react-native"

import { Query } from "react-apollo"

import VEHICLES_QUERY from "../Vehicle/data/vehiclesQuery"

import Vehicles from "./components/Vehicles"

export default ({ navigation }) => (
  <Query
    query={VEHICLES_QUERY}>
    {({
      loading,
      error,
      data
    }) => (
      <Vehicles
        vehicles={[]}
        navigation={navigation} />
    )}
  </Query>
)
