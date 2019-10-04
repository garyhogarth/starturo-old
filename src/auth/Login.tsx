import React from 'react'
import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native'
import { Button } from 'react-native-elements'
import { useNavigation } from 'react-navigation-hooks'

const TAG = 'Login'
export const Login = () => {
  const { navigate } = useNavigation()

  return (
    <View style={styles.container}>
      <ImageBackground source={require('#assets/images/food1.jpg')} style={styles.topContainer}>
        <SafeAreaView />
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <Button onPress={() => navigate('Onboarding')} title='Go Back' testID={`${TAG} Button Onboarding`} />
      </View>
    </View>
  )
}

Login.navigationOptions = {
  title: 'Login',
  header: null,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  topContainer: {
    flex: 7,
  },
  bottomContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 3,
    backgroundColor: '#fff',
  },
})
