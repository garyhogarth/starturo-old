import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { useNavigation } from 'react-navigation-hooks'

const TAG = 'Examples'

export const Examples = () => {
  const { navigate } = useNavigation()
  return (
    <>
      <Button onPress={() => navigate('Counter')} testID={`${TAG} Button Counter`} title='Counter' />
    </>
  )
}
