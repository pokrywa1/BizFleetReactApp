import { ActionType, SetAuthStoreAction, TAuthStore } from '../actions'

export const initialState: TAuthStore = {
  accessToken: null,
}

const reducer = (state: TAuthStore = initialState, action: SetAuthStoreAction): TAuthStore => {
  switch (action.type) {
    case ActionType.SET_AUTH_STORE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
export const authReducer = reducer
