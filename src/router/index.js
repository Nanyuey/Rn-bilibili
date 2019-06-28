import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import Home from '../pages/Home'
import Test2 from '../pages/test2'
import Test3 from '../pages/test3'
import Test4 from '../pages/test4'
import Login from '../pages/login'
import Register from '../pages/register'
const TabNavigator = createBottomTabNavigator({
  Home: Login,
  Settings: Test3
})

const AppNavigator = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
      }
    },
    Register: Register,
    Login: Login,
    Detail: Test2,
    Test: Test4,
    initialRouteName: 'Home'
  },
  {
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      header: null
    }
  }
)

export default createAppContainer(AppNavigator)
