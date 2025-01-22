'use client';
import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';
import Image from 'next/image';

const HomeContent = () => {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '80px',
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: { xs: '1.5rem', sm: '2rem' },
                zIndex: 1,
                backdropFilter: 'blur(8px)',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    zIndex: 2,
                }}
            >
                <Image
                    src="/logo.png"
                    alt="Metaverse Logo"
                    style={{ width: '120px', height: 'auto' }}
                />
            </Box>

            <Typography
                variant="h4"
                sx={{
                    color: '#00d4ff',
                    fontSize: { xs: '2rem', sm: '2.5rem' },
                    fontWeight: 'bold',
                    textShadow: '0px 0px 20px rgba(0, 224, 255, 1)',
                    marginBottom: '2rem',
                    marginTop: '4rem',
                }}
            >
                Bine ai venit în Metavers
            </Typography>

            <Typography
                variant="body1"
                sx={{
                    color: '#ffffff',
                    fontSize: { xs: '1rem', sm: '1.2rem' },
                    lineHeight: 1.6,
                    maxWidth: '800px',
                    marginBottom: '3rem',
                    paddingX: { xs: '1rem', sm: '0' },
                }}
            >
                Metaversul este un univers virtual interconectat în care
                utilizatorii pot explora, crea și deține active digitale. Acesta
                combină realitatea augmentată (AR), realitatea virtuală (VR) și
                blockchain-ul pentru a crea o lume digitală captivantă.
            </Typography>

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    zIndex: 1,
                    marginBottom: '4rem',
                    flexWrap: 'wrap',
                    paddingX: '1rem',
                }}
            >
                <Card
                    sx={{
                        maxWidth: '345px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        borderRadius: '15px',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.6)',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0px 8px 20px rgba(0, 255, 255, 0.3)',
                        },
                    }}
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image="/metaverse-card1.jpg"
                        alt="Explorare Metavers"
                    />
                    <CardContent>
                        <Typography variant="h6" sx={{ color: '#00d4ff' }}>
                            Explorează Lumi Noi
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: '#ffffff', marginTop: '1rem' }}
                        >
                            Intră și explorează universul digital vast, cu
                            posibilități nelimitate pentru aventură și creație.
                        </Typography>
                    </CardContent>
                </Card>

                {/* Card 2 */}
                <Card
                    sx={{
                        maxWidth: '345px',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        borderRadius: '15px',
                        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.6)',
                        textAlign: 'center',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            boxShadow: '0px 8px 20px rgba(0, 255, 255, 0.3)',
                        },
                    }}
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image="/metaverse-card2.jpg"
                        alt="Tehnologie Metavers"
                    />
                    <CardContent>
                        <Typography variant="h6" sx={{ color: '#00d4ff' }}>
                            Modelează Viitorul
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: '#ffffff', marginTop: '1rem' }}
                        >
                            Construiește și creează noi spații digitale,
                            economii și experiențe folosind cele mai noi
                            tehnologii virtuale.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
};

export default HomeContent;
