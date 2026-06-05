import axios from 'axios'
import { jwtDecode } from 'jwt-decode'

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:7098',
  headers: {
    'Content-Type': 'application/json',
  },
})

export async function login({ email, password }) {
  const { data } = await client.post('/login', { email, password })
  return data.token
}

export function decodeToken(token) {
  return jwtDecode(token)
}
