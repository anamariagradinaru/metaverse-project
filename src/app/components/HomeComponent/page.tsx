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
                {/* Moving Wave Animation */}
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

                {/* Light Streak Animation */}
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
                    {/* Light Glassmorphism Container */}
                    <div
                        className="p-6 rounded-lg"
                        style={{
                            background: 'rgba(255, 255, 255, 0.1)', // Light transparent background
                            backdropFilter: 'blur(15px)', // Soft frosted glass effect
                            WebkitBackdropFilter: 'blur(15px)', // Safari support
                            border: '1px solid rgba(255, 255, 255, 0.2)', // Light border
                            borderRadius: '12px', // Smaller rounded corners
                            boxShadow: '0 4px 10px rgba(255, 255, 255, 0.3)', // Subtle glow around the card
                            marginBottom: '20px',
                            width: '80%', // Reduced width to make it more compact
                            maxWidth: '800px', // Maximum width for larger screens
                            marginLeft: 'auto', // Centered horizontally
                            marginRight: 'auto', // Centered horizontally
                            position: 'relative',
                        }}
                    >
                        {/* Title */}
                        <Typography
                            variant="h4"
                            className="font-semibold mb-4"
                            style={{
                                color: '#ffffff', // Clean white text for readability
                                textShadow:
                                    '0 0 8px rgba(0, 212, 255, 0.5), 0 0 10px rgba(138, 43, 226, 0.4)', // Subtle glow effect
                                letterSpacing: '0.5px', // Slightly tighter letter spacing
                            }}
                        >
                            Welcome to the Metaverse!
                        </Typography>

                        {/* Description of Metaverse */}
                        <Typography
                            variant="body2"
                            className="font-light mb-6"
                            style={{
                                color: '#ccc', // Lightened text for readability
                                lineHeight: '1.6',
                                fontSize: '0.9rem', // Slightly smaller font size for a more compact look
                                textAlign: 'center', // Center text for better balance
                            }}
                        >
                            The Metaverse is a boundless digital universe where
                            you can explore, create, and interact. Dive into
                            immersive realms powered by virtual reality (VR),
                            augmented reality (AR), and digital economies. A
                            place where possibilities are infinite and every
                            experience is tailor-made for you.
                        </Typography>

                        {/* Glowing Animated Border */}
                        <div
                            style={{
                                position: 'absolute',
                                top: '-3px',
                                left: '-3px',
                                right: '-3px',
                                bottom: '-3px',
                                borderRadius: '12px',
                                background:
                                    'linear-gradient(90deg, rgba(0, 212, 255, 0.2), rgba(138, 43, 226, 0.2))',
                                zIndex: -1,
                                animation:
                                    'glow-border 3s ease-in-out infinite alternate',
                            }}
                        ></div>

                        {/* Animation for Border Glowing Effect */}
                        <style>
                            {`
            @keyframes glow-border {
                0% {
                    box-shadow: 0 0 15px rgba(0, 212, 255, 0.5), 0 0 20px rgba(138, 43, 226, 0.4);
                }
                100% {
                    box-shadow: 0 0 25px rgba(0, 212, 255, 0.3), 0 0 30px rgba(138, 43, 226, 0.3);
                }
            }
        `}
                        </style>
                    </div>

                    {/* Futuristic Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card
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
                                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#00d4ff',
                                    fontWeight: 'bold',
                                    marginBottom: '15px',
                                }}
                            >
                                Virtual Reality (VR)
                            </Typography>
                            <CardContent>
                                <Typography
                                    sx={{
                                        color: '#ffffff',
                                        fontSize: '1rem',
                                    }}
                                >
                                    Virtual reality is at the core of the
                                    Metaverse. It allows users to fully immerse
                                    themselves in digital environments,
                                    experiencing them as if they were physically
                                    present.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
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
                                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#00d4ff',
                                    fontWeight: 'bold',
                                    marginBottom: '15px',
                                }}
                            >
                                Augmented Reality (AR)
                            </Typography>
                            <CardContent>
                                <Typography
                                    sx={{
                                        color: '#ffffff',
                                        fontSize: '1rem',
                                    }}
                                >
                                    AR blends the physical and digital worlds,
                                    allowing you to interact with virtual
                                    objects as if they existed in the real
                                    world. This enables seamless experiences
                                    across environments.
                                </Typography>
                            </CardContent>
                        </Card>

                        <Card
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
                                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                                },
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#00d4ff',
                                    fontWeight: 'bold',
                                    marginBottom: '15px',
                                }}
                            >
                                Digital Economy
                            </Typography>
                            <CardContent>
                                <Typography
                                    sx={{
                                        color: '#ffffff',
                                        fontSize: '1rem',
                                    }}
                                >
                                    The digital economy in the Metaverse allows
                                    users to buy, sell, and trade virtual goods,
                                    assets, and services, all while creating new
                                    ways for people to generate income in a
                                    fully immersive environment.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default HomeComponent;
