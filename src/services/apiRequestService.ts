import axios from 'axios'

type MethodType = 'post' | 'put' | 'get' | 'delete'

export default async (method: MethodType, url: string, payload: {} = {}) => {
  const res = await axios[method](url, payload)

  return res.data
}
