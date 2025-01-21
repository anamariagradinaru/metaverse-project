'use client';

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';

const DashboardComponent = () => {
    return (
        <Box
            sx={{
                backgroundImage: `url('/bg-photo.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <div
                    className="p-10 rounded-lg"
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)', // Translucent white background
                        backdropFilter: 'blur(10px)', // Frosted glass effect
                        WebkitBackdropFilter: 'blur(10px)', // For Safari
                        border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
                        borderRadius: '20px', // Smooth rounded corners
                    }}
                >
                    <Typography
                        variant="h3"
                        className="text-4xl font-bold mb-6"
                        style={{
                            color: '#ffffff',
                        }}
                    >
                        Welcome to Metaverse!
                    </Typography>

                    <h1
                        className="text-xl font-bold mb-8"
                        style={{
                            color: '#ffffff',
                        }}
                    >
                        Do you want to explore in my universe?
                    </h1>

                    {/* Smooth scrolling link */}
                    <Link href="#HomeSection" passHref>
                        <Button
                            variant="contained"
                            className="relative transform transition-transform hover:scale-110"
                            style={{
                                background:
                                    'linear-gradient(90deg, #00d4ff, #8a2be2)', // Blue to purple gradient
                                color: '#ffffff',
                                fontSize: '1.2rem',
                                padding: '1rem 2rem',
                                textTransform: 'none',
                                borderRadius: '30px',
                                overflow: 'hidden',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            Start the trip
                        </Button>
                    </Link>
                </div>
            </div>
        </Box>
    );
};

export default DashboardComponent;
