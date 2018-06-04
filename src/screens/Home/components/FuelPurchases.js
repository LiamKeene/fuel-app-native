import React from "react"

import {
  Divider,
  ListItem,
  Text,
} from "react-native-paper"

import Tile from "../../../components/Tile"

export default ({ purchases }) => (
  <Tile>
    <Text>
      Recent fuel purchases
    </Text>
    {purchases && purchases.map(({
      id,
      odometer,
      quantity,
      filled,
      timePurchased,
      vehicle: {
        rego
      }
    }) => ([
      <ListItem
        key={id}
        title={rego}
        description={`${odometer} - ${filled} - ${timePurchased}`} />,
      <Divider
        key={`divider-${id}`} />
    ]))}
  </Tile>
)
