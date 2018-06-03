import React from "react"

import {
  compose,
  pure,
  withReducer,
} from "recompose"

import { Mutation } from "react-apollo"

import {
  Alert,
} from "react-native"

import createReducer from "../../utils/createReducer"

import VehicleFormScreen from "./components/VehicleForm"
import CREATE_VEHICLE_MUTATION from "./data/createVehicleMutation"
import VEHICLES_QUERY from "../Vehicles/data/vehiclesQuery"

import Loading from "../../components/Loading"

const formReducer = createReducer({})({
  ["UPDATE_INPUT"]: (state, action) => ({ ...state, [action.name]: action.value })
})

const updateForm = withReducer("form", "dispatch", formReducer, { rego: "", make: "", model: "" })

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

const EnhancedVehicle = compose(
  updateForm,
  pure
)(({
  dispatch,
  form,
  createVehicle
}) => (
  <VehicleFormScreen
    form={form}
    dispatch={dispatch}
    submit={createVehicle} />
))

export default ({ navigation }) => (
  <Mutation
    mutation={CREATE_VEHICLE_MUTATION}
    update={(cache, { data }) => updateCache(cache, { data, navigation })}>
    {(createVehicle, {
      loading,
      error
    }) => ([
      <EnhancedVehicle
        key="create-vehicle"
        createVehicle={createVehicle}
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
