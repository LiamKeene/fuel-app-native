import React from "react"

import {
  compose,
  pure,
  withReducer,
} from "recompose"

import createReducer from "../../utils/createReducer"

import VehicleScreen from "./components/Vehicle"

const formReducer = createReducer({})({
  ["UPDATE_INPUT"]: (state, action) => ({ ...state, [action.name]: action.value })
})

const updateForm = withReducer("form", "dispatch", formReducer, { rego: "", make: "", model: "" })

const EnhancedVehicle = compose(
  updateForm,
  pure
)(VehicleScreen)

export default ({ navigation }) => (
  <EnhancedVehicle
    navigation={navigation} />
)
