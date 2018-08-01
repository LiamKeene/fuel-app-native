import React from "react"

import { Text, View } from "react-native"

import { Wrapper } from "./../components/Wrappers"

export default () => (
  <View
    style={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
    <Wrapper>
      <Text
        style={{
          fontSize: 20
        }}>
        Loading the App!!
      </Text>
    </Wrapper>
  </View>
)
