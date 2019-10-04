/* eslint-disable semi */
import Reactotron from 'reactotron-react-native'

Reactotron.configure({
  name: 'React Native Demo',
})
  .useReactNative({
    asyncStorage: false, // there are more options to the async storage.
    editor: false, // there are more options to editor
    errors: { veto: stackFrame => false }, // or turn it off with false
    networking: {
      // optionally, you can turn it off with false.
      ignoreUrls: /symbolicate/,
    },
    overlay: false, // just turning off overlay
  })
  .connect()
