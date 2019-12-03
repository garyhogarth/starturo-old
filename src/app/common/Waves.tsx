import React, { useEffect, useRef } from 'react'
import { Animated, View, ViewStyle } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const AnimatedSvg = Animated.createAnimatedComponent(Svg)
const AnimatedPath = Animated.createAnimatedComponent(Path)

interface WavesProps {
  height?: number
  width?: number
  waterHeight: number
}

export const Waves = (props: WavesProps) => {
  const { height = 100, width = 100, waterHeight = 0 } = props

  return (
    <View
      style={{
        height,
        width,
      }}>
      <Wave waveHeight={10} waterHeight={waterHeight} fill='rgba(124, 252, 0, 0.1)' waveWidth={200} />
      <Wave waveHeight={10} waterHeight={waterHeight} fill='rgba(124, 252, 0, 0.3)' waveWidth={150} />
      <Wave waveHeight={10} waterHeight={waterHeight} fill='rgba(124, 252, 0, 0.8)' waveWidth={100} />
    </View>
  )
}

interface WaveProps {
  waveWidth: number
  waveHeight: number
  waterHeight: number
  fill: string
}

export const Wave = (props: WaveProps) => {
  const { waveWidth = 100, waveHeight = 10, waterHeight = 50, fill = '#000' } = props

  const H = waterHeight
  const T = waveWidth
  const A = waveHeight

  const animatedXPosition = useRef(new Animated.Value(0)).current

  const translateX = animatedXPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -2 * T],
  })

  const d = `M 0 0 Q ${T / 4} ${-A} ${T / 2} 0 T ${T} 0 T ${(3 * T) / 2} 0 T ${2 * T} 0 T ${(5 * T) / 2} 0 T ${3 *
    T} 0 V ${H} H 0 Z`

  const pulse = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animatedXPosition, { toValue: 1, duration: 2500 }),
        Animated.timing(animatedXPosition, { toValue: 0, duration: 2500 }),
      ]),
    ).start()
  }

  useEffect(() => {
    const timeout = setTimeout(() => pulse(), 0)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <AnimatedSvg
      style={{
        width: 3 * T,
        height: A + H,
        position: 'absolute',
        left: 0,
        bottom: 0,
        transform: [{ translateX }],
      }}
      preserveAspectRatio='xMinYMin meet'
      viewBox={`0 0 ${3 * T} ${A + H}`}>
      <AnimatedPath d={d} fill={fill} transform={`translate(0, ${A})`} />
    </AnimatedSvg>
  )
}
