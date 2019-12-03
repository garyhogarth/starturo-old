import { clamp } from 'lodash'
import React, { useEffect, useRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'

import { Waves } from '#starturo/app/common/Waves'

interface PointsBubbleProps {
  maxPoints: number
  points: number
  diameter: number
}

const TAG = 'PointsBubble'

const WAVE_COLORS = {
  0: '124, 252, 0',
  20: '170, 200, 10',
  40: '195, 182, 21',
  60: '218, 165, 32',
  80: '220, 90, 45',
  100: '255, 0, 0',
}

export const PointsBubble = (props: PointsBubbleProps) => {
  const { diameter, points, maxPoints } = props
  const innerDiameter = Math.ceil(diameter * 0.98)
  const percent = points / maxPoints
  const waveHeight = Math.ceil(innerDiameter / 10)
  const waterHeight = clamp(percent * innerDiameter, 0, innerDiameter)
  const borderRadius = Math.ceil(innerDiameter / 2)
  const bracket = Math.min(Math.floor((percent * 100) / 20) * 20, 100)
  const colorRGB = (WAVE_COLORS as any)[bracket] || WAVE_COLORS[0]
  const fontSize = Math.ceil(innerDiameter / 3)
  const waveRef: any = useRef(null)
  useEffect(() => {
    if (waveRef) {
      // waveRef.current.setWaterHeight(waterHeight)
    }
  }, [waterHeight])

  const waveParams = [
    {
      A: waveHeight,
      T: diameter,
      fill: `rgba(${colorRGB}, 0.1)`,
    },
    {
      A: waveHeight,
      T: Math.ceil(diameter * 1.5),
      fill: `rgba(${colorRGB}, 0.2)`,
    },
    {
      A: waveHeight,
      T: Math.ceil(diameter * 2),
      fill: `rgba(${colorRGB}, 0.5)`,
    },
  ]

  return (
    <>
      <View style={[styles.pointsBubbleContainer, { height: diameter, width: diameter, borderRadius, aspectRatio: 1 }]}>
        {/* <Wave
          ref={waveRef}
          style={[
            styles.pointsBubble,
            {
              height: innerDiameter,
              width: innerDiameter,
              borderRadius,
              aspectRatio: 1,
            },
          ]}
          H={waterHeight}
          speed={12000}
          speedIncreasePerWave={500}
          waveParams={waveParams}
          animated={true}
        /> */}
        <Waves waterHeight={waterHeight} height={diameter} width={diameter} />
        <Text style={[styles.pointsTotal, { fontSize, width: innerDiameter, textShadowRadius: 10 }]}>{points}</Text>
      </View>
    </>
  )
}

PointsBubble.defaultProps = {
  diameter: 100,
  maxPoints: 15,
  points: 0,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
  wave: {
    width: 100,
    aspectRatio: 1,
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  waveBall: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 50,
    overflow: 'hidden',
  },
  pointsBubbleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    backgroundColor: '#e7f5fe',
  },
  pointsBubble: {
    overflow: 'hidden',
    backgroundColor: '#e7f5fe',
  },
  pointsTotal: {
    position: 'absolute',
    fontWeight: 'bold',
    color: 'rgb(32, 0, 107)',
    textAlign: 'center',
  },
})
