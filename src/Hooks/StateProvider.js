import React, { createContext, useContext, useReducer } from "react"

// starts context creation
export const StateContext = createContext()

// wraps the application and provides the data
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// grabs information from the context
export const useStateValue = () => useContext(StateContext)
