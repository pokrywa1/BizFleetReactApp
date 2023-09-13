import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { TUserAccount } from '../api/public/auth/getMe.ts'

type TUserStore = {
  user: TUserAccount | null
  setUserAuth: (user: TUserAccount) => void
  clearUserAuth: () => void
}

const useUserStore = create<TUserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        setUserAuth: (user: TUserAccount) => set({ user }),
        clearUserAuth: () => set(() => ({ user: null })),
      }),
      {
        name: 'auth-storage',
      },
    ),
  ),
)

export default useUserStore
