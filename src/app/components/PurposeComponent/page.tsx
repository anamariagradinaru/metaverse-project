'use client';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion'; // Pentru animații

const PurposeSection = () => {
    return (
        <Box
            id="purpose"
            sx={{
                backgroundColor: '#121212',
                padding: '4rem 2rem',
                textAlign: 'center',
                color: '#ffffff',
                overflow: 'hidden',
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    color: '#00d4ff',
                    fontSize: '3rem',
                    fontWeight: 'bold',
                    textShadow: '0px 0px 20px rgba(0, 224, 255, 1)',
                    marginBottom: '3rem',
                }}
            >
                De ce Metaversul?
            </Typography>

            {/* Descriere */}
            <Typography
                sx={{
                    color: '#ffffff',
                    fontSize: '1.2rem',
                    lineHeight: 1.8,
                    maxWidth: '800px',
                    marginBottom: '4rem',
                    marginX: 'auto',
                }}
            >
                Metaversul este o lume virtuală interconectată în care poți
                explora, crea și colabora cu alții într-un mediu captivant.
                Aceasta combină realitatea virtuală, realitatea augmentată și
                tehnologia blockchain pentru a deschide noi orizonturi digitale.
            </Typography>

            {/* Secțiuni interactive */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                }}
            >
                {/* Secțiunea 1 */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        padding: '2rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        borderRadius: '15px',
                        boxShadow: '0px 4px 15px rgba(0, 255, 255, 0.3)',
                        cursor: 'pointer',
                        maxWidth: '300px',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ color: '#00d4ff', marginBottom: '1rem' }}
                    >
                        Explorează Lumi Noi
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff' }}>
                        Intră în universuri virtuale unde orice este posibil, de
                        la aventuri captivante la interacțiuni sociale.
                    </Typography>
                </motion.div>

                {/* Secțiunea 2 */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        padding: '2rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        borderRadius: '15px',
                        boxShadow: '0px 4px 15px rgba(0, 255, 255, 0.3)',
                        cursor: 'pointer',
                        maxWidth: '300px',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ color: '#00d4ff', marginBottom: '1rem' }}
                    >
                        Creează și Colaborează
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff' }}>
                        Construiește spații virtuale, lucrează cu alții și
                        adu-ți ideile la viață într-un mod inovator.
                    </Typography>
                </motion.div>

                {/* Secțiunea 3 */}
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        padding: '2rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        borderRadius: '15px',
                        boxShadow: '0px 4px 15px rgba(0, 255, 255, 0.3)',
                        cursor: 'pointer',
                        maxWidth: '300px',
                    }}
                >
                    <Typography
                        variant="h5"
                        sx={{ color: '#00d4ff', marginBottom: '1rem' }}
                    >
                        Deține Acte Digitale
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffffff' }}>
                        Utilizează blockchain pentru a deține obiecte unice,
                        terenuri virtuale sau alte bunuri digitale valoroase.
                    </Typography>
                </motion.div>
            </Box>

            {/* Buton pentru explorare */}
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{ marginTop: '3rem' }}
            >
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#ff007f',
                        fontSize: '1.2rem',
                        padding: '1rem 2rem',
                        borderRadius: '30px',
                        textTransform: 'none',
                        boxShadow: '0 0 15px rgba(255, 0, 127, 0.6)',
                        '&:hover': {
                            backgroundColor: '#ff0099',
                            boxShadow: '0 0 25px rgba(255, 0, 127, 0.8)',
                        },
                    }}
                >
                    Descoperă Metaversul
                </Button>
            </motion.div>
        </Box>
    );
};

export default PurposeSection;
