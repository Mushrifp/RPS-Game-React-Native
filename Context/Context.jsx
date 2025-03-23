import React, { createContext, useState } from 'react'

export const contextVariable = createContext(null) 

const Context = ({children}) => {

    const [userValue,setUserValue] = useState("")

  return (
    <contextVariable.Provider value={{userValue,setUserValue}}>
      {children}
    </contextVariable.Provider>
  )
}

export default Context