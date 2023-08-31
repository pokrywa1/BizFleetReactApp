import axios from 'axios'

export const postImage = (image: FormData) => {
  const instance = axios.create()

  return instance({
    url: 'https://api.cloudinary.com/v1_1//image/upload',
    method: 'post',
    data: image,
  }).then((result) => result)
}
