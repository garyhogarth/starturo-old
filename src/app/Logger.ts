import Reactotron from 'reactotron-react-native'

interface LoggerInterface {
  log: (...args: any[]) => void
  logImportant: (...args: any[]) => void
  debug: (message: any, important?: boolean) => void
  warn: (message: any) => void
  error: (message: any, stack: any) => void
}

export const Logger: LoggerInterface = {
  // tslint:disable-next-line: no-console
  log: (__DEV__ && Reactotron.log) || console.log,
  // tslint:disable-next-line: no-console
  logImportant: (__DEV__ && Reactotron.logImportant) || console.log,
  // tslint:disable-next-line: no-console
  error: (__DEV__ && Reactotron.error) || console.log,
  // tslint:disable-next-line: no-console
  warn: (__DEV__ && Reactotron.warn) || console.log,
  // tslint:disable-next-line: no-console
  debug: (__DEV__ && Reactotron.debug) || console.log,
}
