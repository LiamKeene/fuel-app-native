import React from "react"

import {
  createDrawerNavigator,
  createSwitchNavigator,
} from "react-navigation"

import {
  Toolbar,
  ToolbarContent,
  ToolbarAction,
  ToolbarBackAction,
} from 'react-native-paper'

import RootNavigator, {
  DrawerItems
} from "./components/Navigation"

import VehiclesScreen from "./screens/Vehicles"
import LoginScreen from "./screens/Login"
import SignupScreen from "./screens/Signup"

import { removeCredentials } from "./applicationStorage"

export const SignedIn = ({ currentUser }) => (
  createDrawerNavigator({
    Home: { screen: RootNavigator },
    Vehicles: { screen: VehiclesScreen },
  }, {
    contentComponent: ({ navigation }) => (
      <DrawerItems
        currentUser={currentUser}
        navigation={navigation}
        onLogout={removeCredentials} />
    ),
  })
)

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

export const createRootNavigator = ({ currentUser = null, everHeldAccount = false }) => (
  createSwitchNavigator({
    SignedIn: {
      screen: SignedIn({ currentUser })
    },
    SignedOut: {
      screen: SignedOut({ everHeldAccount })
    }
  }, {
    initialRouteName: (currentUser && !!currentUser.jwt) ? "SignedIn" : "SignedOut"
  })
)
