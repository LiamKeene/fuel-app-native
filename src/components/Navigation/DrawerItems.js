import * as React from "react"

import {
  compose
} from "recompose"

import {
  DrawerActions
} from "react-navigation"

import { View, StyleSheet, Platform } from "react-native"
import {
  DrawerItem,
  DrawerSection,
  Text,
  withTheme,
} from "react-native-paper"

const DrawerItems = ({ navigation }) => (
  <View>
    <DrawerSection title="Fuel App">
      <View
        style={{
          height: 90,
          textAlign: "center",
        }}>
        <Text
          style={{
            margin: 8,
            marginTop: 24,
            padding: 8,
          }}>
          Profile Information
        </Text>
      </View>
    </DrawerSection>
    <DrawerSection>
      <DrawerItem
        label="Home"
        icon="home"
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer())
          navigation.navigate("Home")
        }} />
      <DrawerItem
        label="Vehicles"
        icon="directions-car"
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer())
          navigation.navigate("Vehicles")
        }} />
    </DrawerSection>
  </View>
)

export default compose(
  withTheme
)(DrawerItems)
