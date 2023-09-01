import { createContext, useEffect, useState } from 'react'
import { profile } from '../mocks/profile.json'

export const UsersContext = createContext('')

export function UsersContextProvider ({ children }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    setUsers(profile)
  }, [])

  return (
		<UsersContext.Provider value={{ users }}>
			{children}
		</UsersContext.Provider>
  )
}
