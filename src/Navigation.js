import React from "react"

import { createStackNavigator, createSwitchNavigator } from "react-navigation"

import Home from "./screens/Home"
import Login from "./screens/Login"
import Signup from "./screens/Signup"

import { getCurrentCredentials } from "./storage"

export const SignedOut = ({ everHeldAccount = false }) => (
  createStackNavigator({
    Signup: {
      screen: Signup,
      navigationOptions: {
        title: "Sign Up"
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Sign In"
      }
    },
  }, {
    initialRouteName: everHeldAccount ? "Login" : "Signup"
  })
)

export const SignedIn = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
})

export const createRootNavigator = ({ signedIn = false, everHeldAccount = false }) => (
  createSwitchNavigator({
    SignedIn: {
      screen: SignedIn
    },
    SignedOut: {
      screen: SignedOut({ everHeldAccount })
    }
  }, {
    initialRouteName: signedIn ? "SignedIn" : "SignedOut"
  })
)
