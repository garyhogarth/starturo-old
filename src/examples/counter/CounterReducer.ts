import { CounterModifyAction, DECREMENT, INCREMENT } from './CounterActions'

export interface CounterState {
  count: number
}

const initalState: CounterState = {
  count: 0,
}

export const modifyCount = (state: CounterState, amount: number = 1) => ({
  ...state,
  count: state.count + amount,
})

export const counterReducer = (state: CounterState = initalState, action: CounterModifyAction) => {
  switch (action.type) {
    case INCREMENT:
      return modifyCount(state, 1)
    case DECREMENT:
      return modifyCount(state, -1)
    default:
      return state
  }
}
