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
  withTheme,
  Switch,
  TouchableRipple,
  Paragraph,
  Colors,
} from "react-native-paper"

const DrawerItems = ({ navigation }) => (
  <View>
    <DrawerSection title="Subheader">
      <DrawerItem
        label="Home"
        icon="home"
        onPress={() => {
          navigation.navigate("Home")
          navigation.dispatch(DrawerActions.toggleDrawer())
        }} />
    </DrawerSection>
  </View>
)

export default compose(
  withTheme
)(DrawerItems)
