import { useState, createContext } from 'react'

export const UserIdContext = createContext()

/**
 * The UserIdProvider component is a React context provider that provides the userId and toggleUserId
 * function to its children. The userId and toggleUserId function are used to toggle the userId between 12 and 18.
 * @returns {ReactContextProvider}
 */
export const UserIdProvider = ({ children }) => {
  const [userId, setUserId] = useState(12)
  const toggleUserId = () => {
    setUserId(userId === 12 ? 18 : 12)
  }

  return (
    <UserIdContext.Provider value={{ userId, toggleUserId }}>
      {children}
    </UserIdContext.Provider>
  )
}
