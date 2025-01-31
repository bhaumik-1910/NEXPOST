import React from 'react';
import { Button, Typography, Box, Container, Divider } from '@mui/material';

const WelcomePage = () => {
    return (
        <Container sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#F6F6F6' }}>
            <Box>
                <Typography variant="h6"
                    sx={{
                        marginTop: 9,
                        '@media (max-width: 468px)': {
                            fontSize: '1.5rem',
                            position: 'relative',
                            right: 18,
                            bottom: 65,
                        },
                    }}>
                    Welcome Back !
                </Typography>

                <Typography variant="p"
                    sx={{
                        marginBottom: 4,
                        '@media (max-width: 468px)': {
                            fontSize: '1rem',
                            position: 'relative',
                            right: 18,
                            bottom: 65,
                        },
                    }}>
                    Start
                </Typography>

                <div>
                    <Button
                        variant="contained"
                        size="medium"
                        sx={{
                            textTransform: 'none',
                            color: 'white',
                            borderRadius: '50px',
                            position: 'relative',
                            left: '61rem',
                            bottom: '2.9rem',
                            height: "40px",
                            width: '170px',
                            gap: 1,

                            '@media (max-width: 1024px)': {
                                position: 'relative',
                                left: '740px',
                            },

                            '@media (max-width: 768px)': {
                                position: 'relative',
                                left: '485px',
                            },

                            '@media (max-width: 468px)': {
                                position: 'relative',
                                left: '150px',
                                top: 400
                            },
                        }}
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.18396 6.70986C3.30388 6.38578 3.76226 6.38578 3.88218 6.70986L4.07691 7.2361C4.11461 7.33799 4.19495 7.41833 4.29684 7.45603L4.82308 7.65076C5.14716 7.77068 5.14716 8.22906 4.82308 8.34898L4.29684 8.54371C4.19495 8.58141 4.11461 8.66174 4.07691 8.76363L3.88218 9.28988C3.76226 9.61396 3.30388 9.61396 3.18396 9.28988L2.98923 8.76363C2.95153 8.66174 2.8712 8.58141 2.76931 8.54371L2.24306 8.34898C1.91898 8.22906 1.91898 7.77068 2.24306 7.65076L2.76931 7.45603C2.8712 7.41833 2.95153 7.33799 2.98923 7.2361L3.18396 6.70986Z"
                                fill="white"
                            />
                            <path
                                d="M6.90629 2.24306C7.02622 1.91898 7.48459 1.91898 7.60451 2.24306L8.00032 3.31272C8.03802 3.41461 8.11836 3.49494 8.22025 3.53264L9.2899 3.92845C9.61399 4.04837 9.61398 4.50675 9.2899 4.62667L8.22025 5.02248C8.11836 5.06018 8.03802 5.14051 8.00032 5.2424L7.60451 6.31206C7.48459 6.63614 7.02622 6.63614 6.90629 6.31206L6.51049 5.2424C6.47278 5.14051 6.39245 5.06018 6.29056 5.02248L5.22091 4.62667C4.89682 4.50675 4.89682 4.04837 5.22091 3.92845L6.29056 3.53264C6.39245 3.49494 6.47278 3.41461 6.51049 3.31272L6.90629 2.24306Z"
                                fill="white"
                            />
                            <path
                                d="M9.88422 6.70986C10.0041 6.38578 10.4625 6.38578 10.5824 6.70986L11.3804 8.86633C11.4181 8.96822 11.4984 9.04855 11.6003 9.08626L13.7568 9.88422C14.0809 10.0041 14.0809 10.4625 13.7568 10.5824L11.6003 11.3804C11.4984 11.4181 11.4181 11.4984 11.3804 11.6003L10.5824 13.7568C10.4625 14.0809 10.0041 14.0809 9.88422 13.7568L9.08626 11.6003C9.04855 11.4984 8.96822 11.4181 8.86633 11.3804L6.70986 10.5824C6.38578 10.4625 6.38578 10.0041 6.70986 9.88422L8.86633 9.08626C8.96822 9.04855 9.04855 8.96822 9.08626 8.86633L9.88422 6.70986Z"
                                fill="white"
                            />
                        </svg>
                        Generate New
                    </Button>
                </div>

                <Divider
                    sx={{
                        position: 'relative',
                        bottom: 30,
                        border: '1px solid #000',
                        '@media (max-width: 468px)': {
                            display: 'none',
                        },
                    }}
                />
            </Box>
        </Container>

    );
};

export default WelcomePage;
