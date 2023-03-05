import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Login from './components/Login'
import Home from './container/Home'
const App = () => {
    return (
        <GoogleOAuthProvider clientId="829602449063-43gm138e2silcb7a9v5fbcbl2bc93i44.apps.googleusercontent.com">
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='/*' element={<Home />} />
            </Routes>

        </GoogleOAuthProvider>

    )
}

export default App