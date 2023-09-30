import React, { useState, useEffect } from 'react'
const UserContext = React.createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [errors, setErrors] = useState([])
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('/me')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    setIsLoggedIn(false)
                } else {
                    setIsLoggedIn(true)
                    setUser(data)
                    fetchComments()
                }
            })
    })

    const fetchComments = () => {
        fetch("/comments")
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setComments(data)
            })
    }
    const login = (user) => {
        setUser(user)
        setIsLoggedIn(true)
    }
    const logout = () => {
        setUser({})
        isLoggedIn(false)
    }
    const signup = (user) => {
        setUser(user)
        setIsLoggedIn(true)
    }

    return (
        <UserContext.Provider value={{ user, setUser, errors, setErrors, login, logout, signup, isLoggedIn, comments }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
