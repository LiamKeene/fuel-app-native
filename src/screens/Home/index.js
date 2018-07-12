import React from "react"

import {
  branch,
  compose,
  pure,
  renderComponent,
  withStateHandlers
} from "recompose"

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
import VEHICLE_PURCHASES_QUERY from "../Purchases/data/getPurchasesQuery"
import VEHICLES_QUERY from "../Vehicles/data/vehiclesQuery"

import Vehicles from "./components/Vehicles"
import FuelPurchases from "./components/FuelPurchases"

const VehiclePurchases = ({ vehicleId, navigation }) => (
  <Query
    key="fuel-purchases"
    query={VEHICLE_PURCHASES_QUERY}
    variables={{ vehicleId }}>
    {({
      loading,
      error,
      data
    }) => (
      <FuelPurchases
        purchases={data && data.getPurchases || []}
        navigation={navigation} />
      )}
  </Query>
)

const AllPurchases = ({ vehicleId, navigation }) => (
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
)

const FilteredVehicles = branch(
  ({ vehicleId }) => vehicleId !== undefined,
  renderComponent(VehiclePurchases),
  renderComponent(AllPurchases)
)(<div />)

const updatePicker = withStateHandlers(
  () => ({ vehicleId: undefined }),
  {
    onUpdatePicker: () => ({ vehicleId }) => ({ vehicleId })
  }
)

export default compose(
  updatePicker,
  pure
)(({
  onUpdatePicker,
  vehicleId,
  navigation
}) => ([
  <ScrollView
    key="main">
    <Query
      key="vehicles"
      query={VEHICLES_QUERY}>
      {({
        data
      }) => (
        <Vehicles
          vehicles={data && data.getVehicles || []}
          selectedVehicle={vehicleId}
          onChange={vehicleId => onUpdatePicker({ vehicleId })}
          navigation={navigation} />
      )}
    </Query>
    <FilteredVehicles
      vehicleId={vehicleId} />
  </ScrollView>,
  <FAB
    key="purchase-fab"
    dark
    icon="local-gas-station"
    style={{
      position: "absolute",
      bottom: 10,
      right: 10,
    }}
    onPress={() => {}} />
]))
