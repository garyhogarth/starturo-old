import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { useNavigation } from 'react-navigation-hooks'

const TAG = 'Registration'
export const Registration = () => {
  const { navigate } = useNavigation()

  return <View style={styles.container} />
}

Registration.navigationOptions = {
  title: 'Registration',
  headerMode: 'none',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
