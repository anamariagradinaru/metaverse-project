import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';

function HeaderComponent() {
    return (
        <Box
            sx={{
                position: 'absolute', // Position header absolutely
                top: 0,
                left: 0,
                width: '100%', // Ensure it spans the full width
                padding: '1rem 2rem',
                background: 'rgba(52, 52, 195, 0.7)', // Dark blue with transparency
                backdropFilter: 'blur(10px)', // Glassmorphism effect
                color: '#ffffff', // White text for contrast
                zIndex: 10, // Ensure it stays above the background
                display: 'flex',
                justifyContent: 'space-between', // Align items across the header
                alignItems: 'center',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', // Subtle shadow
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)', // Optional border
            }}
        >
            <h1
                style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    textShadow: '0px 0px 10px rgba(255, 255, 255, 0.8)', // Glow effect
                    color: '#00d4ff', // Neon blue
                }}
            >
                Metaverse
            </h1>
            <nav>
                <ul
                    style={{
                        display: 'flex',
                        gap: '1rem',
                        listStyleType: 'none',
                    }}
                >
                    <Link
                        href={'/home'}
                        style={{ color: '#ffffff', cursor: 'pointer' }}
                    >
                        Home
                    </Link>
                    <Link
                        href={'/scop'}
                        style={{ color: '#ffffff', cursor: 'pointer' }}
                    >
                        Scop
                    </Link>
                    <Link
                        href={'/proiecte'}
                        style={{ color: '#ffffff', cursor: 'pointer' }}
                    >
                        Proiecte
                    </Link>
                    <Link
                        href={'/evenimente'}
                        style={{ color: '#ffffff', cursor: 'pointer' }}
                    >
                        Evenimente
                    </Link>
                    <Link
                        href={'/echipa'}
                        style={{ color: '#ffffff', cursor: 'pointer' }}
                    >
                        Echipa
                    </Link>
                </ul>
            </nav>
        </Box>
    );
}

export default HeaderComponent;
