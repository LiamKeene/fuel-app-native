import React from "react"

import {
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation"

import LoginScreen from "../../screens/Login"
import SignupScreen from "../../screens/Signup"

import { Drawer } from "./Drawer"

export const SignedOut = ({ everHeldAccount = false }) => (
  createSwitchNavigator({
    Signup: {
      screen: SignupScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  }, {
    initialRouteName: everHeldAccount ? "Login" : "Signup"
  })
)

export const createRootNavigator = ({
  signedIn = null,
  everHeldAccount = false
}) => (
  createSwitchNavigator({
    SignedIn: {
      screen: createStackNavigator({ Drawer })
    },
    SignedOut: {
      screen: SignedOut({ everHeldAccount })
    }
  }, {
    initialRouteName: signedIn ? "SignedIn" : "SignedOut"
  })
)
