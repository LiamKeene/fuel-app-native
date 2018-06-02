import React from "react"

import {
  Text,
} from "react-native"

import Tile from "../../../components/Tile"

export default ({ navigation }) => (
  <Tile>
    <Text
      onPress={() => navigation.navigate("Vehicle")}>
      Click here to create one
    </Text>
  </Tile>
)
