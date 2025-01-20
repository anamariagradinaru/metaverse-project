'use client';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

// Sample team member data (with your image)
const teamMembers = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: '123 Metaverse St, City 001',
        phone: '+1234567890',
        photo: 'team-1.jpg', // Your profile photo
        photoBack: '/images/team-1.jpg', // Another photo for the hover effect
    },
    {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        address: '456 Metaverse Ave, City 002',
        phone: '+0987654321',
        photo: 'team-2.jpg',
        photoBack: '/images/team-1.jpg',
    },
    {
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        address: '789 Metaverse Rd, City 003',
        phone: '+1122334455',
        photo: 'team-1.jpg',
        photoBack: '/images/team-1.jpg',
    },
    {
        name: 'Bob Lee',
        email: 'bob.lee@example.com',
        address: '101 Metaverse Blvd, City 004',
        phone: '+5566778899',
        photo: 'team-2.jpg',
        photoBack: '/images/team-1.jpg',
    },
];

const TeamComponent = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '100vh',
                backgroundImage: 'url(/bg-team.jpg)', // Add your background image
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backdropFilter: 'blur(10px)', // Frosted glass effect
                WebkitBackdropFilter: 'blur(10px)', // Safari support
                color: '#fff',
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    maxWidth: '90%',
                    marginBottom: '50px',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: 'Roboto, sans-serif',
                        textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                        fontSize: '3rem',
                        marginBottom: '40px',
                    }}
                >
                    Meet the Metaverse Team
                </Typography>

                {/* Team Cards */}
                <Grid container spacing={4} justifyContent="center">
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                sx={{
                                    position: 'relative',
                                    background: 'rgba(255, 255, 255, 0.1)', // Slightly translucent background
                                    borderRadius: '15px',
                                    boxShadow:
                                        '0 8px 15px rgba(0, 212, 255, 0.5)',
                                    backdropFilter: 'blur(15px)', // Frosted glass effect
                                    '&:hover': {
                                        boxShadow:
                                            '0 0 30px rgba(0, 212, 255, 0.7)', // Glowing effect on hover
                                    },
                                    maxWidth: '270px',
                                    margin: '0 auto',
                                }}
                            >
                                {/* Image Hover Effect */}
                                <div
                                    style={{
                                        position: 'relative',
                                        height: '180px',
                                        width: '100%',
                                        overflow: 'hidden',
                                        borderRadius: '15px 15px 0 0',
                                    }}
                                >
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundImage: `url(${member.photo})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition:
                                                'transform 0.5s ease-in-out',
                                            transform: 'rotate(0deg)',
                                            borderRadius: '15px 15px 0 0',
                                        }}
                                        className="team-photo-hover"
                                    />
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundImage: `url(${member.photoBack})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center',
                                            transition:
                                                'transform 0.5s ease-in-out',
                                            transform: 'rotate(90deg)',
                                            borderRadius: '15px 15px 0 0',
                                        }}
                                        className="team-photo-back"
                                    />
                                </div>

                                {/* Team Member Details */}
                                <CardContent
                                    sx={{
                                        paddingTop: '15px',
                                        paddingBottom: '15px',
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            color: '#fff',
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                        }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#ccc',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        <strong>Email:</strong> {member.email}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#ccc',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        <strong>Address:</strong>{' '}
                                        {member.address}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#ccc',
                                            fontSize: '0.9rem',
                                        }}
                                    >
                                        <strong>Phone:</strong> {member.phone}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>

            {/* Hover Effect CSS */}
            <style jsx>{`
                .team-photo-hover:hover {
                    transform: rotate(90deg);
                }

                .team-photo-back {
                    transform: rotate(0deg);
                    transition: transform 0.5s ease-in-out;
                }

                .team-photo-back:hover {
                    transform: rotate(0deg);
                }
            `}</style>
        </Box>
    );
};

export default TeamComponent;
