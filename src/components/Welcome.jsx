import React from 'react';
import { Button, Typography, Box, Container } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const WelcomePage = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F6F6F6' }}>
            <Box>
                <Typography variant="h6" sx={{ marginTop: 9 }}>
                    Welcome Back !
                </Typography>
                <Typography variant="p" sx={{ marginBottom: 4 }}>
                    Start
                </Typography>

                <Button
                    variant="contained"
                    size="medium"
                    sx={{
                        backgroundColor: '#1E1E1E',
                        color: 'white',
                        borderRadius: '50px',
                        marginLeft: '83%',
                        marginTop: "-60px",
                        height: "48px",
                        width: '198px'
                    }}
                    startIcon={<AcUnitIcon sx={{ marginRight: 1 }} />}
                >
                    Generate New
                </Button>
                <hr color='#E7E7E7' />
            </Box>
        </Container>
    );
};

export default WelcomePage;
