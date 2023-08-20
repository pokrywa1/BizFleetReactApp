import { BASE_URL } from '../config/env.ts'
import { publicRoutes } from './public'
import { userRoutes } from './user'

export const routes = {
  index: `${BASE_URL}/`,
  ...publicRoutes,
  ...userRoutes,
}
