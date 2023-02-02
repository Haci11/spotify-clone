import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './pages/Login'
import { getAccessToken } from './utils/getAccessToken'
import { getAccessTokenFromStorage } from './utils/getAccessTokenFromStorage'

function App() {
    const [token, setToken] = useState('')

    useEffect(() => {
        let accessToken = getAccessTokenFromStorage() || getAccessToken()

        if (accessToken) {
            sessionStorage.setItem('spotifyToken', accessToken)
            setToken(accessToken)
            window.location.hash = ''
        }
    }, [])

    return (
        <Box sx={{ height: '100%' }}>
            {token ? (
                <Dashboard />
            ) : (
                <Routes>
                    <Route path='*' element={<Login />} />
                </Routes>
            )}
        </Box>
    )
}

export default App
