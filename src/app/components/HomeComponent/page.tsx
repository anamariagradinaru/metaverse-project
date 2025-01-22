'use client';
import { Box, Card, CardContent, Typography } from '@mui/material';

const HomeComponent = () => {
    return (
        <div id="HomeSection">
            <Box
                sx={{
                    position: 'relative',
                    height: '100vh',
                    backgroundImage: `url('/bg-home.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background:
                            'linear-gradient(90deg, rgba(0, 212, 255, 0.1), rgba(138, 43, 226, 0.1))',
                        zIndex: 0,
                        overflow: 'hidden',
                        '&::before': {
                            content: "''",
                            position: 'absolute',
                            top: '-50%',
                            left: '-50%',
                            width: '200%',
                            height: '200%',
                            background:
                                'radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent)',
                            animation: 'rotate-wave 30s linear infinite',
                            zIndex: -1,
                        },
                        '@keyframes rotate-wave': {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' },
                        },
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        overflow: 'hidden',
                        zIndex: 0,
                    }}
                >
                    {[...Array(10)].map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                position: 'absolute',
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                width: '2px',
                                height: '200px',
                                background:
                                    'linear-gradient(to bottom, #00d4ff, transparent)',
                                animation: `streak-move ${
                                    Math.random() * 5 + 5
                                }s linear infinite`,
                                '@keyframes streak-move': {
                                    '0%': { transform: 'translateY(-200px)' },
                                    '100%': { transform: 'translateY(100vh)' },
                                },
                            }}
                        />
                    ))}
                </Box>

                <div className="flex flex-col items-center justify-center h-screen text-center relative z-10">
                    {/* Content container */}
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(15px)',
                            WebkitBackdropFilter: 'blur(15px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            borderRadius: '12px',
                            boxShadow: '0 4px 10px rgba(255, 255, 255, 0.3)',
                            marginBottom: '20px',
                            width: '90%', // Smaller width for mobile
                            maxWidth: '600px', // Adjusted max width
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            position: 'relative',
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontSize: {
                                    xs: '1.5rem',
                                    sm: '2rem',
                                    md: '2.5rem',
                                }, // Responsive font sizes
                                color: '#ffffff',
                                textShadow:
                                    '0 0 8px rgba(0, 212, 255, 0.5), 0 0 10px rgba(138, 43, 226, 0.4)',
                                letterSpacing: '0.5px',
                                marginBottom: '16px',
                            }}
                        >
                            Welcome to the Metaverse!
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                color: '#ccc',
                                lineHeight: '1.6',
                                fontSize: { xs: '0.9rem', sm: '1rem' },
                                textAlign: 'center',
                                marginBottom: '20px',
                            }}
                        >
                            The Metaverse is a boundless digital universe where
                            you can explore, create, and interact. Dive into
                            immersive realms powered by virtual reality (VR),
                            augmented reality (AR), and digital economies. A
                            place where possibilities are infinite and every
                            experience is tailor-made for you.
                        </Typography>
                    </div>

                    {/* Cards container */}
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                        style={{
                            width: '100%',
                            padding: '0 20px', // Padding for smaller screens
                            boxSizing: 'border-box',
                        }}
                    >
                        {[
                            {
                                title: 'Virtual Reality (VR)',
                                content:
                                    'Virtual reality is at the core of the Metaverse. It allows users to fully immerse themselves in digital environments, experiencing them as if they were physically present.',
                            },
                            {
                                title: 'Augmented Reality (AR)',
                                content:
                                    'AR blends the physical and digital worlds, allowing you to interact with virtual objects as if they existed in the real world. This enables seamless experiences across environments.',
                            },
                            {
                                title: 'Digital Economy',
                                content:
                                    'The digital economy in the Metaverse allows users to buy, sell, and trade virtual goods, assets, and services, all while creating new ways for people to generate income in a fully immersive environment.',
                            },
                        ].map((card, index) => (
                            <Card
                                key={index}
                                sx={{
                                    position: 'relative',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    backdropFilter: 'blur(10px)',
                                    borderRadius: '15px',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                    padding: '20px',
                                    transition: 'all 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scale(1.05)',
                                        boxShadow:
                                            '0 15px 35px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: '#00d4ff',
                                        fontWeight: 'bold',
                                        marginBottom: '15px',
                                        fontSize: {
                                            xs: '1.2rem',
                                            sm: '1.5rem',
                                        },
                                    }}
                                >
                                    {card.title}
                                </Typography>
                                <CardContent>
                                    <Typography
                                        sx={{
                                            color: '#ffffff',
                                            fontSize: {
                                                xs: '0.9rem',
                                                sm: '1rem',
                                            },
                                            lineHeight: '1.5',
                                        }}
                                    >
                                        {card.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default HomeComponent;
