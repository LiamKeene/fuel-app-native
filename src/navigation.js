import React from "react"

import {
  createDrawerNavigator,
  createSwitchNavigator,
} from "react-navigation"

import RootNavigator, {
  DrawerItems
} from "./components/Navigation"

import LoginScreen from "./screens/Login"
import SignupScreen from "./screens/Signup"

export const SignedIn = () => (
  createDrawerNavigator({
    Home: { screen: RootNavigator }
  }, {
    contentComponent: ({ navigation }) => (
      <DrawerItems
        navigation={navigation} />
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

export const createRootNavigator = ({
  signedIn = null,
  everHeldAccount = false
}) => (
  createSwitchNavigator({
    SignedIn: {
      screen: SignedIn()
    },
    SignedOut: {
      screen: SignedOut({ everHeldAccount })
    }
  }, {
    initialRouteName: signedIn ? "SignedIn" : "SignedOut"
  })
)
