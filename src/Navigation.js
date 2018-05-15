import React from "react"

import { StackNavigator } from 'react-navigation'

import Login from "./screens/Login"
import Signup from "./screens/Signup"

const AppNavigator = StackNavigator({
  Signup,
  // Login,
})

export default AppNavigator
