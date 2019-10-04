import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import { useScreens } from 'react-native-screens'
import { Provider } from 'react-redux'

import { MainNavigator, store, theme } from '#starturo/app'

// Use react-native-screens
useScreens()

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainNavigator />
      </ThemeProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
