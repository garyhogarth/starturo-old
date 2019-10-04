import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Button, Card, Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'

import { Logger } from '#starturo/app'
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
        <Button onPress={() => setLocalCount(localCount + 1)} title='+1' testID={`${TAG} Button Increment`} />
        <Button onPress={() => setLocalCount(localCount - 1)} title='-1' testID={`${TAG} Button Decrement`} />
      </Card>

      <Card title='Count (Redux State)'>
        <Text testID={`${TAG} Redux Text`} style={styles.bigNumber}>
          {count}
        </Text>
        <Button onPress={() => dispatch(increment())} title='Add 1' testID={`${TAG} Redux Button Increment`} />
        <Button onPress={() => dispatch(decrement())} title='Subtract 1' testID={`${TAG} Redux Button Decrement`} />
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
})
