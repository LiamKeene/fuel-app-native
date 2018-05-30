import React from "react"

import {
  createDrawerNavigator,
  DrawerActions,
} from "react-navigation"

import Icon from "react-native-vector-icons/FontAwesome"

import HomeScreen from "../../screens/Home"
import VehicleScreen from "../../screens/Vehicle"

import NavBarItem from "./NavBarItem"

import {
  createDrawerNavigationOptions,
  createDrawerConfig,
  createNavigationOptionsWithAction,
} from "./utils"

const renderDrawerItem = navigation => (
  <NavBarItem
    iconName="bars"
    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />
)

const renderDrawerIcon = (iconName, tintColor) => (
  <Icon
    name={iconName}
    size={20}
    color={tintColor} />
)

const homeDrawerIcon    = ({ tintColor }) => renderDrawerIcon("home", tintColor)
const vehicleDrawerIcon = ({ tintColor }) => renderDrawerIcon("car", tintColor)

const homeNavOptions    = createDrawerNavigationOptions("Home", "green", "white", homeDrawerIcon)
const vehicleNavOptions = createDrawerNavigationOptions("Users", "red", "white", vehicleDrawerIcon)

export const Drawer = createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: homeNavOptions
  },
  VehicleScreen: {
    screen: VehicleScreen,
    navigationOptions: vehicleNavOptions
  },
}, createDrawerConfig(300, "left", "HomeScreen"))

Drawer.navigationOptions = ({ navigation }) => (
  createNavigationOptionsWithAction("Fuel App", "blue", "white", renderDrawerItem(navigation))
)
