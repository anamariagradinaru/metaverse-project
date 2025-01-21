'use client';

import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

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
                position: 'relative',
                padding: { xs: '10px', md: '0' }, // Add padding for smaller screens
            }}
        >
            {/* Logo in the top-left corner */}
            <Box
                sx={{
                    position: 'absolute',
                    top: { xs: '10px', md: '20px' }, // Adjust top margin for mobile
                    left: { xs: '10px', md: '20px' }, // Adjust left margin for mobile
                }}
            >
                <Image
                    src="/logo.png"
                    alt="Logo"
                    width={80} // Smaller logo for mobile
                    height={40}
                    style={{ cursor: 'pointer' }}
                />
            </Box>

            {/* Main content */}
            <div className="flex flex-col items-center justify-center text-center h-full w-full">
                <div
                    className="rounded-lg"
                    style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        borderRadius: '20px',
                        width: '100%',
                        maxWidth: '500px', // Set max width for the container
                        padding: '20px', // Adjust padding for mobile
                        boxSizing: 'border-box',
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontSize: { xs: '1.8rem', md: '2.5rem' }, // Smaller font for mobile
                            color: '#ffffff',
                            marginBottom: '16px',
                        }}
                    >
                        Welcome to Metaverse!
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.25rem' }, // Adjust font size for mobile
                            color: '#ffffff',
                            marginBottom: '24px',
                        }}
                    >
                        Do you want to explore in my universe?
                    </Typography>

                    {/* Button with responsive design */}
                    <Link href="#HomeSection" passHref>
                        <Button
                            variant="contained"
                            className="relative transform transition-transform hover:scale-110"
                            sx={{
                                background:
                                    'linear-gradient(90deg, #00d4ff, #8a2be2)',
                                color: '#ffffff',
                                fontSize: { xs: '1rem', md: '1.2rem' }, // Adjust font size for mobile
                                padding: {
                                    xs: '0.8rem 1.5rem',
                                    md: '1rem 2rem',
                                }, // Adjust padding for mobile
                                textTransform: 'none',
                                borderRadius: '30px',
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
