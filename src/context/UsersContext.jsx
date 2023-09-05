import { createContext, useEffect, useState } from 'react'
import { profile } from '../mocks/profile.json'

export const UsersContext = createContext('')

export function UsersContextProvider ({ children }) {
  const [users, setUsers] = useState(profile)
  const [credit, setCredit] = useState(0)

  useEffect(() => {
    setCredit(users.credit)
  }, [])

  return (
		<UsersContext.Provider value={{ users, setUsers, credit, setCredit }}>
			{children}
		</UsersContext.Provider>
  )
}
