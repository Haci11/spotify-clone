import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'

export default function SidebarPlaylistItem({ name, id }) {
    return (
        <Link to={`/playlist/${id}`} style={{ textDecoration: 'none' }}>
            <Box
                px={3}
                py={1}
                sx={{
                    color: 'text.secondary',
                    cursor: 'pointer',
                    fontSize: 14,
                }}
            >
                {name}
            </Box>
        </Link>
    )
}
