import React from "react"

import {
  Text,
  ScrollView,
  View
} from "react-native"

import {
  FAB
} from "react-native-paper"

import { Mutation, Query } from "react-apollo"

import PURCHASES_QUERY from "../Purchases/data/allPurchasesQuery"
import VEHICLES_QUERY from "../Vehicles/data/vehiclesQuery"

import Vehicles from "./components/Vehicles"
import FuelPurchases from "./components/FuelPurchases"

export default ({ navigation }) => ([
  <ScrollView>
    <Query
      key="vehicles"
      query={VEHICLES_QUERY}>
      {({
        data
      }) => (
        <Vehicles
          vehicles={data && data.getVehicles || []}
          navigation={navigation} />
      )}
    </Query>
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
  </ScrollView>,
  <FAB
    dark
    icon="local-gas-station"
    style={{
      position: "absolute",
      bottom: 10,
      right: 10,
    }}
    onPress={() => {}}/>
])
