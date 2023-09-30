import React, { useEffect, useState } from 'react'

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loggedIn, setLoggedIn] = useState(false)
    const [comments, setComments] = useState([])
    const [errors, setErrors] = useState([])

    useEffect(() => {
        fetch('/me')
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    setLoggedIn(false)
                } else {
                    setLoggedIn(true)
                    setUser(data)
                    fetchComments(data.comments)
                }
            })
    })
    const fetchComments = () => {
        fetch('/comments')
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
    }
    const login = (user) => {
        setUser(user)
        setLoggedIn(true)
        fetchComments()
    }
    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }
    const signup = () => {
        setUser(user)
        setLoggedIn(true)
    }


    return (
        <UserContext.Provider value={{ user, setUser, login, logout, signup, errors, setErrors, loggedIn, comments }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
