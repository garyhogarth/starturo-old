import { MainNavigator, store, theme } from '#starturo/app'
import React from 'react'
import { StyleSheet } from 'react-native'
import { ThemeProvider } from 'react-native-elements'
import { useScreens } from 'react-native-screens'
import { Provider } from 'react-redux'

// Use react-native-screens
useScreens()

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainNavigator style={styles.container} />
      </ThemeProvider>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
