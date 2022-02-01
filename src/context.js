import React, { useState, useContext, useReducer, useEffect } from 'react'
import reducer from './reducer'

const AppContext =  React.createContext()

const initialState = {
	msg: "hello react"
}

const AppProvider = ({ children }) => {

	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<AppContext.Provider
			value={{
				...state,
			}}
		>
			{children}
		</AppContext.Provider>
	)
}

export const useGlobalContext = () =>{
	return useContext(AppContext)
}

export { AppProvider }

