'use client';
import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const EventSection = () => {
    const events = [
        {
            title: 'Metaverse Music Festival',
            date: 'March 15, 2025',
            description:
                'A spectacular virtual concert experience with global artists performing live in the metaverse.',
            image: '/event1.jpg',
        },
        {
            title: 'Metaverse Hackathon',
            date: 'April 22, 2025',
            description:
                'Collaborate and innovate with developers worldwide to create new metaverse experiences.',
            image: '/event2.jpg',
        },
        {
            title: 'Virtual Art Gallery',
            date: 'May 10, 2025',
            description:
                'Explore digital art pieces from groundbreaking artists in the virtual realm.',
            image: '/event3.jpg',
        },
        {
            title: 'Metaverse Fashion Show',
            date: 'June 5, 2025',
            description:
                'Experience the future of fashion in the digital world, showcasing the latest virtual fashion trends.',
            image: '/event4.jpg',
        },
    ];

    return (
        <Box
            sx={{
                position: 'relative',
                padding: '4rem 2rem',
                background: 'linear-gradient(45deg, #1c1c1c, #00d4ff)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                boxShadow: '0 4px 15px rgba(0, 255, 255, 0.1)',
            }}
        >
            {/* Section Title */}
            <Typography
                variant="h4"
                sx={{
                    color: '#ffffff',
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textShadow: '0 0 30px rgba(0, 224, 255, 1)',
                    marginBottom: '2rem',
                }}
            >
                Upcoming Events in the Metaverse
            </Typography>

            {/* Events Grid */}
            <Grid container spacing={4} justifyContent="center">
                {events.map((event, index) => (
                    <Grid item key={index} xs={12} sm={6} md={3}>
                        <Box
                            sx={{
                                position: 'relative',
                                background: 'rgba(0, 0, 0, 0.7)',
                                borderRadius: '15px',
                                boxShadow:
                                    '0px 4px 15px rgba(0, 255, 255, 0.2)',
                                padding: '2rem',
                                textAlign: 'center',
                                transition:
                                    'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'scale(1.1)',
                                    boxShadow:
                                        '0px 8px 25px rgba(0, 255, 255, 0.3)',
                                },
                            }}
                        >
                            {/* Hover effect - glow and rotate */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '0',
                                    right: '0',
                                    bottom: '0',
                                    backgroundImage: `url(${event.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    borderRadius: '15px',
                                    zIndex: -1,
                                    filter: 'brightness(0.5)',
                                    opacity: 0.8,
                                    transition: 'transform 0.5s ease-in-out',
                                }}
                            ></Box>

                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#00d4ff',
                                    fontSize: '1.4rem',
                                    fontWeight: 'bold',
                                    textShadow:
                                        '0 0 10px rgba(0, 255, 255, 0.9)',
                                    marginBottom: '1rem',
                                    position: 'relative',
                                    zIndex: 1,
                                }}
                            >
                                {event.title}
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#ffffff',
                                    marginBottom: '1rem',
                                    position: 'relative',
                                    zIndex: 1,
                                    fontSize: '1rem',
                                    lineHeight: 1.5,
                                }}
                            >
                                {event.description}
                            </Typography>

                            <Typography
                                variant="body2"
                                sx={{
                                    color: '#00d4ff',
                                    fontSize: '0.9rem',
                                    position: 'relative',
                                    zIndex: 1,
                                    textTransform: 'uppercase',
                                }}
                            >
                                {event.date}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default EventSection;
