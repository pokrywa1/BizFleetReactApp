import { create } from 'zustand'
import { TSignInFormResponse } from '../api/public/auth/postSigIn.tsx'
import { devtools, persist } from 'zustand/middleware'

type TUserStore = {
  setUserAuth: (accessToken: string) => void
  clearUserAuth: () => void
} & TSignInFormResponse

const useUserStore = create<TUserStore>()(
  devtools(
    persist(
      (set) => ({
        accessToken: null,
        setUserAuth: (accessToken: string) => set(() => ({ accessToken: accessToken })),
        clearUserAuth: () => set(() => ({ accessToken: null })),
      }),
      {
        name: 'auth-storage',
      },
    ),
  ),
)

export default useUserStore
