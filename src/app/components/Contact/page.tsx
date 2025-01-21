'use client';
import React from 'react';
import { Box, Typography, TextField, Button, Avatar } from '@mui/material';

const ContactSection = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                padding: '5rem 2rem',
                background: 'linear-gradient(45deg, #00d4ff, #8a2be2)', // Neon gradient background
                backdropFilter: 'blur(10px)', // Frosted glass effect
                borderRadius: '25px',
                boxShadow: '0px 10px 40px rgba(0, 255, 255, 0.4)', // Glowing shadow for futuristic feel
                zIndex: 1,
                overflow: 'hidden',
            }}
        >
            {/* Futuristic Background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background:
                        'url("/background-grid.png") center center no-repeat',
                    backgroundSize: 'cover',
                    opacity: 0.3,
                    zIndex: -1,
                    animation: 'gridMove 15s infinite linear', // Add a moving grid animation
                }}
            ></Box>

            {/* Title */}
            <Typography
                variant="h4"
                sx={{
                    color: '#ffffff', // Bright color for visibility
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginBottom: '3rem',
                    textShadow: '0 0 15px rgba(0, 255, 255, 1)', // Glowing text shadow
                }}
            >
                Connect With Us in the Metaverse
            </Typography>

            {/* Optional Profile/Logo Photo */}
            <Avatar
                src="/profile-photo.jpg" // Replace with your image path
                alt="Profile Photo"
                sx={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto',
                    marginBottom: '2rem',
                    borderRadius: '50%', // Makes it round
                    boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)', // Neon glow around the avatar
                }}
            />

            {/* Contact Form */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    maxWidth: '650px',
                    margin: '0 auto',
                    padding: '2rem 2.5rem',
                    background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                    borderRadius: '25px',
                    boxShadow: '0 4px 30px rgba(0, 255, 255, 0.5)', // Glow around the form
                }}
            >
                {/* Floating Input Fields */}
                <TextField
                    label="Your Name"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        marginBottom: '2rem',
                        '& .MuiInputLabel-root': {
                            color: '#00d4ff', // Neon cyan label
                        },
                        '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            borderColor: '#00d4ff',
                            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)', // Floating glow effect
                            borderRadius: '20px',
                        },
                        '& .MuiOutlinedInput-root:hover': {
                            borderColor: '#8a2be2',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused': {
                            borderColor: '#8a2be2', // Change on focus
                            boxShadow: '0 0 15px rgba(0, 255, 255, 1)', // Glow effect
                        },
                    }}
                />
                <TextField
                    label="Email Address"
                    variant="outlined"
                    sx={{
                        width: '100%',
                        marginBottom: '2rem',
                        '& .MuiInputLabel-root': {
                            color: '#00d4ff',
                        },
                        '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            borderColor: '#00d4ff',
                            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                            borderRadius: '20px',
                        },
                        '& .MuiOutlinedInput-root:hover': {
                            borderColor: '#8a2be2',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused': {
                            borderColor: '#8a2be2',
                            boxShadow: '0 0 15px rgba(0, 255, 255, 1)',
                        },
                    }}
                />
                <TextField
                    label="Message"
                    variant="outlined"
                    multiline
                    rows={4}
                    sx={{
                        width: '100%',
                        marginBottom: '3rem',
                        '& .MuiInputLabel-root': {
                            color: '#00d4ff',
                        },
                        '& .MuiOutlinedInput-root': {
                            color: '#ffffff',
                            borderColor: '#00d4ff',
                            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                            borderRadius: '20px',
                        },
                        '& .MuiOutlinedInput-root:hover': {
                            borderColor: '#8a2be2',
                        },
                        '& .MuiOutlinedInput-root.Mui-focused': {
                            borderColor: '#8a2be2',
                            boxShadow: '0 0 15px rgba(0, 255, 255, 1)',
                        },
                    }}
                />

                {/* Submit Button */}
                <Button
                    variant="contained"
                    sx={{
                        background: 'linear-gradient(90deg, #00d4ff, #8a2be2)', // Glowing button gradient
                        color: '#ffffff',
                        fontSize: '1.2rem',
                        padding: '1.2rem 3rem',
                        borderRadius: '30px',
                        boxShadow: '0 4px 30px rgba(0, 255, 255, 0.5)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                        '&:hover': {
                            transform: 'scale(1.1)',
                            boxShadow: '0 4px 40px rgba(0, 255, 255, 0.8)', // Enhanced glow on hover
                        },
                    }}
                >
                    Send Message
                </Button>
            </Box>
        </Box>
    );
};

export default ContactSection;
