import React from 'react'
import { useNavigate } from 'react-router-dom'

const AppContext = React.createContext()

export const useAppContext = () => {
    const value = React.useContext(AppContext)
    return value
}

const AppContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [name, setName] = React.useState()

    React.useEffect(() => {
        if (name) {
            navigate("/game")
        } else {
            navigate("/")
        }
    }, [name])

    const value = React.useMemo(() => {
        const login = (value) => {
            setName(value)
        }
        return {
            name,
            login
        }
    }, [name])

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
