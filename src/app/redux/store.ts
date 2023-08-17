import { createSlice, configureStore } from '@reduxjs/toolkit'
import { initialState } from './reducers/authRecuder.ts'

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setAuthStore: (state, action) => {
      return { ...state, ...action.payload }
    },
  },
})

export const { setAuthStore } = authSlice.actions
export const authReducer = authSlice.reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default store
