'use client';
import { Box, Card, CardContent, Typography, Grid } from '@mui/material';

const teamMembers = [
    {
        name: 'John Doe',
        email: 'john.doe@example.com',
        address: '123 Metaverse St, City 001',
        phone: '+1234567890',
        photo: 'team-1.jpg',
        photoBack: '/images/team-1.jpg',
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
                minHeight: '100vh',
                backgroundImage: 'url(/bg-team.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px',
                color: '#fff',
            }}
        >
            <Box
                sx={{
                    textAlign: 'center',
                    maxWidth: '100%',
                    marginBottom: '40px',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: 'Roboto, sans-serif',
                        textShadow: '0 0 15px rgba(255, 255, 255, 0.8)',
                        fontSize: { xs: '2rem', sm: '3rem' },
                        marginBottom: '30px',
                    }}
                >
                    Meet the Metaverse Team
                </Typography>

                <Grid
                    container
                    spacing={{ xs: 2, sm: 4 }}
                    justifyContent="center"
                >
                    {teamMembers.map((member, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                sx={{
                                    position: 'relative',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '15px',
                                    boxShadow:
                                        '0 8px 15px rgba(0, 212, 255, 0.5)',
                                    backdropFilter: 'blur(15px)',
                                    '&:hover': {
                                        boxShadow:
                                            '0 0 30px rgba(0, 212, 255, 0.7)',
                                    },
                                    maxWidth: '270px',
                                    margin: '0 auto',
                                }}
                            >
                                <div
                                    style={{
                                        position: 'relative',
                                        height: '150px',
                                        width: '150px',
                                        overflow: 'hidden',
                                        borderRadius: '50%',
                                        margin: '0 auto',
                                        marginTop: '15px',
                                        boxShadow:
                                            '0 0 15px rgba(0, 212, 255, 0.5)',
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
                                            borderRadius: '50%',
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
                                            borderRadius: '50%',
                                        }}
                                        className="team-photo-back"
                                    />
                                </div>

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
                                            fontSize: '1rem',
                                        }}
                                    >
                                        {member.name}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#ccc',
                                            fontSize: '0.8rem',
                                        }}
                                    >
                                        <strong>Email:</strong> {member.email}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#ccc',
                                            fontSize: '0.8rem',
                                        }}
                                    >
                                        <strong>Address:</strong>{' '}
                                        {member.address}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: '#ccc',
                                            fontSize: '0.8rem',
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
