/**
 * Action intended to increment the counter
 */

export type CounterIncrement = 'app/counter/INCREMENT'
export const INCREMENT: CounterIncrement = 'app/counter/INCREMENT'

export interface CounterIncrementAction {
  type: CounterIncrement
}
export const increment = (): CounterIncrementAction => ({ type: INCREMENT })

/**
 * Action intended to decrement the counter
 */

export type CounterDecrement = 'app/counter/DECREMENT'
export const DECREMENT: CounterDecrement = 'app/counter/DECREMENT'

export interface CounterDecrementAction {
  type: CounterDecrement
}
export const decrement = (): CounterDecrementAction => ({ type: DECREMENT })

/**
 * Action set count to a specific value
 */

export type CounterSet = 'app/counter/SET'
export const SET: CounterSet = 'app/counter/SET'

export interface CounterSetAction {
  type: CounterSet
  payload: { value: number }
}
export const setCounterValue = (value: number): CounterSetAction => ({
  type: SET,
  payload: {
    value,
  },
})

export type CounterModifyAction = CounterDecrementAction | CounterIncrementAction
export type CounterAction = CounterDecrementAction | CounterIncrementAction | CounterSetAction
