import React from 'react'
import { Animated, Easing, View } from 'react-native'
import Svg, { Path } from 'react-native-svg'

const AnimatedSvg = Animated.createAnimatedComponent(Svg)

interface WaveParams {
  A: number
  T: number
  fill: string
}
interface WaveProps {
  waveParams: WaveParams[]
  animated: boolean
  H: number
  style: any
}

export const WavesHook = () => {
  return <View />
}

/**
 * @class Wave
 *
 * @prop {Number} H water level
 * @prop {Array} waveParams list of params: {A, T, fill}
 * @prop {bool} animated
 */

class Wave extends React.PureComponent<WaveProps> {
  private animValues: [Animated.Value?] = []
  private animations = []
  private animated = false

  constructor(props: WaveProps) {
    super(props)

    const { H, waveParams = [], animated } = this.props

    this.state = {
      H,
      waveParams,
    }

    this.animated = animated || false

    for (const waveParam of waveParams) {
      this.animValues.push(new Animated.Value(0))
    }
  }

  public componentDidMount() {
    if (this.animated) {
      this.startAnim()
    }
  }

  public componentWillUnmount() {
    this.stopAnim()
    this.animValues = null
    this.animations = null
  }

  public render() {
    const { style } = this.props
    const { H, waveParams } = this.state

    const waves = []

    for (let i = 0; i < waveParams.length; i++) {
      const { A, T, fill } = waveParams[i]
      const translateX = this.animValues[i].interpolate({
        inputRange: [0, 1],
        outputRange: [0, -2 * T],
      })
      const wave = (
        <AnimatedSvg
          key={i}
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
          <Path
            d={`M 0 0 Q ${T / 4} ${-A} ${T / 2} 0 T ${T} 0 T ${(3 * T) / 2} 0 T ${2 * T} 0 T ${(5 * T) / 2} 0 T ${3 *
              T} 0 V ${H} H 0 Z`}
            fill={fill}
            transform={`translate(0, ${A})`}
          />
        </AnimatedSvg>
      )
      waves.push(wave)
    }

    return <View style={style}>{waves}</View>
  }

  public setWaveParams(waveParams) {
    if (!waveParams) {
      return
    }

    const animated = this.animated
    const newWaveCount = waveParams.length
    const oldWaveCount = this.state.waveParams.length
    if (animated) {
      this.stopAnim()
      for (const v of this.animValues) {
        v.setValue(0)
      }
    }
    // if (newWaveCount !== oldWaveCount) {
    this.animValues = []
    for (let i = 0; i < waveParams.length; i++) {
      this.animValues.push(new Animated.Value(0))
    }
    // }

    this.setState(
      {
        waveParams,
      },
      () => {
        if (animated) {
          this.startAnim()
        }
      },
    )
  }

  public setWaterHeight(H) {
    this.setState({ H })
  }

  public startAnim() {
    this.stopAnim()

    const { speed = 5000, speedIncreasePerWave = 1000, easing = 'linear' } = this.props

    for (let i = 0; i < this.animValues.length; i++) {
      const anim = Animated.loop(
        Animated.timing(this.animValues[i], {
          toValue: 1,
          duration: speed + i * speedIncreasePerWave,
          easing: Easing[easing],
          useNativeDriver: true,
        }),
      )
      this.animations.push(anim)
      anim.start()
    }
    this.animated = true
  }

  public stopAnim() {
    for (let _anim of this.animations) {
      _anim.stop()
      _anim = null
    }
    this.animations = []
    this.animated = false
  }
}

export default Wave
