import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'

import { PointsBubble } from '#starturo/app/common/PointsBubble'
import { decrement, getCount, increment } from '#starturo/examples/counter'

const TAG = 'Counter'

export const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(getCount)
  const [localCount, setLocalCount] = useState(0)
  return (
    <>
      <Card title='Count (Local State)'>
        <Text testID={`${TAG} Text`} style={styles.bigNumber}>
          {localCount}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            type='outline'
            onPress={() => setLocalCount(localCount - 1)}
            title='-1'
            testID={`${TAG} Button Decrement`}
          />
          <Button
            style={styles.button}
            type='outline'
            onPress={() => setLocalCount(localCount + 1)}
            title='+1'
            testID={`${TAG} Button Increment`}
          />
        </View>
      </Card>

      <Card title='Count (Redux State)'>
        <Text testID={`${TAG} Redux Text`} style={styles.bigNumber}>
          {count}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            type='outline'
            onPress={() => dispatch(decrement())}
            title='- 1'
            testID={`${TAG} Redux Button Decrement`}
          />
          <Button
            style={styles.button}
            type='outline'
            onPress={() => dispatch(increment())}
            title='+ 1'
            testID={`${TAG} Redux Button Increment`}
          />
        </View>
      </Card>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigNumber: {
    fontSize: 50,
    alignSelf: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    width: 100,
  },
})
