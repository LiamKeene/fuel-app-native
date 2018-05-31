import React from "react"

import {
  createDrawerNavigator,
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation"

import LoginScreen from "../../screens/Login"
import SignupScreen from "../../screens/Signup"

import HomeScreen from "../../screens/Home"
import VehicleScreen from "../../screens/Vehicle"

import NavBarItem from "./NavBarItem"

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Vehicle: { screen: VehicleScreen },
}, {
  navigationOptions: ({ navigation }) => ({
    header: (
      <NavBarItem
        iconName="bars"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
    ),
  }),
})
