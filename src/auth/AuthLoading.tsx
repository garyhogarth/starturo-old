import React, { useEffect } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import { useNavigation } from 'react-navigation-hooks'

export const AuthLoading = () => {
  const { navigate } = useNavigation()
  useEffect(() => {
    setTimeout(() => {
      navigate('AuthStack')
    }, 1000)
  }, [])
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='#0000ff' />
    </View>
  )
}

AuthLoading.navigationOptions = {
  title: 'Loading',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
