import { useMutation, useQueryClient } from '@tanstack/react-query'
import { login } from '../Services/AuthService'

export function useLogin() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ email, password }) => {
      return await login({ email, password })
    },
    onSuccess: (token) => {
      queryClient.setQueryData(['authToken'], token)
    },
    onError: (err) => {
      console.error('Login failed:', err)
    },
  })
}
