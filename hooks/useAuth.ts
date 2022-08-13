import { AuthCtx } from 'context'
import { useContext } from 'react'

const useAuth = () => {
  const context = useContext(AuthCtx)
  if (!context) {
    throw new Error('useAuthCtx must be used inside a AuthProvider')
  }
  return context
}

export default useAuth