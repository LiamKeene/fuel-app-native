import React from "react"

import { createStackNavigator } from "react-navigation"

import Login from "./screens/Login"
import Signup from "./screens/Signup"

const AppNavigator = createStackNavigator({
  Signup: { screen: Signup },
  Login: { screen: Login },
})

export default AppNavigator
