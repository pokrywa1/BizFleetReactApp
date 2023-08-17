import { TSignInFormResponse } from '../../api/public/auth/postSigIn.tsx'
import { Dispatch } from 'redux'

export type TAuthStore = TSignInFormResponse
export enum ActionType {
  SET_AUTH_STORE = 'set_auth_store',
}

export type SetAuthStoreAction = {
  type: ActionType.SET_AUTH_STORE
  payload: TAuthStore
}

export const _setAuthStore = (authData: SetAuthStoreAction['payload']) => {
  return async (dispatch: Dispatch<SetAuthStoreAction>) => {
    console.log('hej')
    dispatch({
      type: ActionType.SET_AUTH_STORE,
      payload: authData,
    })
  }
}
