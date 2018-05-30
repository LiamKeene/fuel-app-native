import React from "react"

import { TouchableOpacity } from "react-native"

import Icon from "react-native-vector-icons/FontAwesome"

export default ({
  iconName,
  iconColor = "#fff",
  onPress
}) => (
  <TouchableOpacity
    style={{ paddingHorizontal: 20 }}
    onPress={() => onPress()}>
    <Icon
      name={iconName}
      size={24}
      color={iconColor} />
  </TouchableOpacity>
)
