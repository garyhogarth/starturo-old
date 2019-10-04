import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { About } from '#starturo/app'
import { AuthLoading, ForgotPassword, Login, Registration } from '#starturo/auth'
import { Counter } from '#starturo/examples/counter'
import { Examples } from '#starturo/examples/Examples'

const AuthNavigator = createStackNavigator(
  {
    Counter: {
      screen: Counter,
    },
    Examples: {
      screen: Examples,
    },
    Login: {
      screen: Login,
    },
    Registration: {
      screen: Registration,
    },
    ForgotPassword: {
      screen: ForgotPassword,
    },
  },
  {
    initialRouteName: 'Examples',
  },
)

const AppNavigator = createSwitchNavigator(
  {
    About: {
      screen: About,
    },
  },
  {
    initialRouteName: 'About',
  },
)

const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: {
      screen: AuthLoading,
    },
    AppStack: {
      screen: AppNavigator,
    },
    AuthStack: {
      screen: AuthNavigator,
    },
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

export const MainNavigator = createAppContainer(RootNavigator)
