import axios from 'axios'

type Method = 'post' | 'put' | 'get' | 'delete'

export default async (method: Method, url: string, payload: {} = {}) => {
  const res = await axios[method](url, payload)

  return res.data
}
