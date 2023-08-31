import axios from 'axios'
import {API_URL} from "../../../config/env.ts"

export const postImage = (image: FormData) => {
  const instance = axios.create()

  return instance({
    url: `${API_URL}/documents/upload`,
    method: 'post',
    data: image,
  }).then((result) => result)
}
