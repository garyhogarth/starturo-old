import React from 'react'
import { StyleSheet, View } from 'react-native'

const TAG = 'ForgotPassword'
export const ForgotPassword = () => {
  return <View style={styles.container} />
}

ForgotPassword.navigationOptions = {
  title: 'Forgot Password',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
