import {
  createStackNavigator,
} from "react-navigation"

import HomeScreen from "../../screens/Home"
import VehicleScreen from "../../screens/Vehicle"

export default createStackNavigator({
  Home: { screen: HomeScreen },
  Vehicle: { screen: VehicleScreen },
})
