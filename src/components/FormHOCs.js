import React from "react"

import {
  compose,
  pure,
  withReducer,
} from "recompose"

import createReducer from "../utils/createReducer"
import { inputReducer } from "../utils/formReducers"

const reducer = initialState => inputReducer(initialState, "UPDATE_INPUT")

export const formReducer = initialState => withReducer("form", "dispatch", reducer(initialState), initialState)
