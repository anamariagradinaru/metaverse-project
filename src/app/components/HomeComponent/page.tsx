'use client';
import { Box } from '@mui/material';
import HeaderComponent from '../HeaderComponent/page';
import HomeContent from '../HomeContent/page';

const HomeComponent = () => {
    return (
        <div>
            {/* Header stays at the top */}
            <HeaderComponent />

            {/* Background image section */}
            <Box
                sx={{
                    position: 'relative',
                    height: '100vh', // Full height for the background
                    backgroundImage: `url('/bg-home.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed', // Parallax effect
                }}
            />

        
            <HomeContent />
        </div>
    );
};

export default HomeComponent;
