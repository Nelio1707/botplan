import { useContext } from 'react'
import { LoginContext } from '.'
import { LoginContextProps } from './interface-props'

export function useLogin(): LoginContextProps {
  const context: LoginContextProps = useContext(LoginContext)

  if (!context) throw new Error('useLogin must be used within an Login')

  return context
}