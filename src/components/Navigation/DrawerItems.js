import * as React from "react"

import {
  compose
} from "recompose"

import {
  DrawerActions
} from "react-navigation"

import {
  View,
  Image,
  StyleSheet,
  Platform
} from "react-native"
import {
  DrawerItem,
  DrawerSection,
  Text,
  withTheme,
} from "react-native-paper"

const DrawerItems = ({
  currentUser,
  navigation,
  theme
}) => (
  <View
    style={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
    <View style={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start",
    }}>
      <DrawerSection
        title="Fuel App"
        style={{
          backgroundColor: theme.colors.primary,
          height: 190,
        }}>
        {currentUser.profile && (
          <View
            style={{
              padding: 16
            }}>
            <Image
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
              }}
              source={{
                uri: currentUser.profile.avatar
              }} />
            <View
              style={{
                marginTop: 16
              }}>
              <Text
                style={{
                  marginBottom: 8
                }}>
                {currentUser.profile.firstName} {currentUser.profile.lastName}
              </Text>
              <Text>
                {currentUser.email}
              </Text>
            </View>
          </View>
        )}
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
    <DrawerSection>
      <DrawerItem
        label="Logout"
        icon="exit-to-app"
        onPress={() => {}} />
    </DrawerSection>
  </View>
)

export default compose(
  withTheme
)(DrawerItems)
