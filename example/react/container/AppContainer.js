import { createStackNavigator, createAppContainer } from 'react-navigation'
import Home from '../screen/Home'
import TooltipExample from "../screen/TooltipExample"
import TextExample from "../screen/TextExample"

const AppNavigator = createStackNavigator(
  {
    Home,
    TooltipExample,
    TextExample
  },
  {
    headerMode: "none",
    mode: "card"
  }
)

export default createAppContainer(AppNavigator)
