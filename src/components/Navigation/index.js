import React from "react"

import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator,
  DrawerActions,
} from "react-navigation"

import {
  Toolbar,
  ToolbarContent,
  ToolbarAction,
  ToolbarBackAction,
} from 'react-native-paper'

import LoginScreen from "../../screens/Login"
import SignupScreen from "../../screens/Signup"

import HomeScreen from "../../screens/Home"
import VehicleScreen from "../../screens/Vehicle"

export { default as DrawerItems } from "./DrawerItems"

export default createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Toolbar>
          <ToolbarAction
            icon="menu"
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
          <ToolbarContent title="Home" />
        </Toolbar>
      ),
    }),
  },
  Vehicle: {
    screen: VehicleScreen,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Toolbar>
          <ToolbarBackAction onPress={() => navigation.goBack()} />
          <ToolbarContent title="Vehicle" />
        </Toolbar>
      ),
    }),
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Toolbar>
          <ToolbarBackAction onPress={() => navigation.goBack()} />
          <ToolbarContent title="Login" />
        </Toolbar>
      ),
    }),
  },
  Signup: {
    screen: SignupScreen,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Toolbar>
          <ToolbarBackAction onPress={() => navigation.goBack()} />
          <ToolbarContent title="Signup" />
        </Toolbar>
      ),
    }),
  },
})
