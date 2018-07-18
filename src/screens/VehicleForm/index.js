import React from "react"
import { compose, branch, pure, renderComponent } from "recompose"
import { Mutation, Query } from "react-apollo"

import {
  Alert,
  View
} from "react-native"

import Loading from "../../components/Loading"

import VehicleFormScreen from "./components/VehicleForm"
import CREATE_VEHICLE_MUTATION from "./data/createVehicleMutation"
import UPDATE_VEHICLE_MUTATION from "./data/updateVehicleMutation"
import GET_VEHICLE_QUERY from "./data/getVehicleQuery"
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

const NewVehicleForm = ({ navigation }) => (
  <Mutation
    mutation={CREATE_VEHICLE_MUTATION}
    update={(cache, { data }) => updateCache(cache, { data, navigation })}>
    {(createVehicle, { loading, error }) => (
      <VehicleFormScreen
        form={{}}
        submit={variables => createVehicle({ variables })} />
    )}
  </Mutation>
)

const EditVehicleForm = ({ navigation, vehicleId }) => (
  <Query
    query={GET_VEHICLE_QUERY}
    variables={{ vehicleId }}>
    {({ loading, error, data }) => (
      <Mutation
        mutation={UPDATE_VEHICLE_MUTATION}
        updateCache={(cache, { data }) => updateCache(cache, { data, navigation })}>
        {(updateVehicle, { loading, error }) => (
          <VehicleFormScreen
            form={data && data.getVehicle || {}}
            submit={variables => updateVehicle({ variables })} />
        )}
      </Mutation>
    )}
  </Query>
)

export default ({ navigation }) => {
  const vehicleId = navigation.getParam("id")

  const Component = compose(
    branch(
      () => vehicleId === undefined,
      renderComponent(NewVehicleForm),
      renderComponent(EditVehicleForm)
    ),
    pure
  )(<View></View>)

  return <Component
    vehicleId={vehicleId}
    navigation={navigation} />
}
