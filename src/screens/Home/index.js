import React from "react"

import {
  Text,
  View
} from "react-native"

import { Query } from "react-apollo"

import PURCHASES_QUERY from "../Purchases/data/allPurchasesQuery"
import VEHICLES_QUERY from "../Vehicles/data/vehiclesQuery"

import Vehicles from "./components/Vehicles"
import FuelPurchases from "./components/FuelPurchases"

export default ({ navigation }) => ([
  <Query
    key="vehicles"
    query={VEHICLES_QUERY}>
    {({
      loading,
      error,
      data
    }) => (
      <Vehicles
        vehicles={data && data.getVehicles || []}
        navigation={navigation} />
    )}
  </Query>,
  <Query
    key="fuel-purchases"
    query={PURCHASES_QUERY}>
    {({
      loading,
      error,
      data
    }) => (
      <FuelPurchases
        purchases={data && data.getAllPurchases || []}
        navigation={navigation} />
    )}
  </Query>
])
