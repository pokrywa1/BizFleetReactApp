import useUserStore from '../../../app/store/useUserStore.ts'
import { getMe } from '../../../app/api/public/auth/getMe.ts'
import { useEffect } from 'react'

type VerifyJwtProps = {
  children: React.ReactNode
}
const VerifyJwt = ({ children }: VerifyJwtProps) => {
  const { clearUserAuth } = useUserStore()

  useEffect(() => {
    getMe()
      .then((data) => console.log(data))
      .catch(() => clearUserAuth())
  }, [])
  return <>{children}</>
}

export default VerifyJwt
