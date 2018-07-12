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
import ProfileScreen from "../../screens/Profile"
import VehicleFormScreen from "../../screens/VehicleForm"
import VehiclesScreen from "../../screens/Vehicles"

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
  Profile: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Toolbar>
          <ToolbarBackAction onPress={() => navigation.goBack()} />
          <ToolbarContent title="Profile" />
        </Toolbar>
      ),
    }),
  },
  Vehicles: {
    screen: VehiclesScreen,
    navigationOptions: ({ navigation }) => ({
      header: (
        <Toolbar>
          <ToolbarBackAction onPress={() => navigation.goBack()} />
          <ToolbarContent title="Vehicles" />
        </Toolbar>
      ),
    }),
  },
  VehicleForm: {
    screen: VehicleFormScreen,
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
