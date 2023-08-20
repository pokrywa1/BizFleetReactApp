import { TSignInFormResponse } from '../api/public/auth/postSigIn.tsx'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store.ts'

export type TAuthStore = TSignInFormResponse
export const initialState: TAuthStore = {
  accessToken: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    _setUser: (state, action: PayloadAction<TAuthStore>) => {
      state.accessToken = action.payload.accessToken
    },
  },
})

export const { _setUser } = authSlice.actions
export const authSelector = (state: RootState) => state.auth
export default authSlice.reducer
