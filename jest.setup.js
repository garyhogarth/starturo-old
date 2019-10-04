/* eslint-disable no-undef */
/* eslint-disable semi */

import { NativeModules as RNNativeModules } from 'react-native'

jest.mock('react-navigation-hooks', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  }
})
jest.mock('react-native-screens', () => {
  return {
    useScreens: () => null,
  }
})

RNNativeModules.UIManager = RNNativeModules.UIManager || {}
RNNativeModules.UIManager.RCTView = RNNativeModules.UIManager.RCTView || {}
RNNativeModules.RNGestureHandlerModule = RNNativeModules.RNGestureHandlerModule || {
  State: { BEGAN: 'BEGAN', FAILED: 'FAILED', ACTIVE: 'ACTIVE', END: 'END' },
}
