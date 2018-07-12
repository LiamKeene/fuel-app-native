import React from "react"

import { Mutation } from "react-apollo"

import {
  Alert,
} from "react-native"

import Loading from "../../components/Loading"

import VehicleFormScreen from "./components/VehicleForm"
import CREATE_VEHICLE_MUTATION from "./data/createVehicleMutation"
import VEHICLES_QUERY from "../Vehicles/data/vehiclesQuery"

const updateCache = async (cache, {
  data: { createVehicle },
  navigation: { navigate }
}) => {
  const { getVehicles } = cache.readQuery({ query: VEHICLES_QUERY })

  cache.writeQuery({
    query: VEHICLES_QUERY,
    data: {
      getVehicles: [...getVehicles, createVehicle]
    }
  })

  navigate("Home")
}

export default ({ navigation }) => (
  <Mutation
    mutation={CREATE_VEHICLE_MUTATION}
    update={(cache, { data }) => updateCache(cache, { data, navigation })}>
    {(createVehicle, {
      loading,
      error
    }) => ([
      <VehicleFormScreen
        key="create-vehicle"
        submit={createVehicle}
        navigation={navigation} />,
      <Loading
        key="loader"
        visible={loading}
        message="Creating vehicle ..." />,
      (error && (
        Alert.alert(
          "There were errors creating the vehicle",
          error.graphQLErrors.map(({ message }) => message).join(", ")
        )
      ))
    ])}
  </Mutation>
)
