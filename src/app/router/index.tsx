import { BASE_URL } from '../config/env.ts'
import { publicRoutes } from './public'

export const routes = {
  index: `${BASE_URL}/`,
  ...publicRoutes,
}
