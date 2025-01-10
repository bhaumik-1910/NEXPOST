import React from 'react';
import { Card, CardMedia, CardContent, Typography, Box, Container } from '@mui/material';

const MyCard = () => {
    return (
        <Container sx={{ marginBottom: '90px' }}>
            <Typography sx={{ marginBottom: '20px' }}>
                Our generator for the LinkedIn
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px', borderRadius: '16px' }} elevation={0}>
                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            LinkedIn Post Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Post your insights on LinkedIn with awesome content!
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            LinkedIn Carousal Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Creare a fun carousel with some cool and unique content!
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            LinkedIn Bio Maker
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Revamp your Linkedln bio with some awesome content!
                        </Typography>
                    </CardContent>
                </Card>
            </Box>

            <hr style={{ Color: '#E7E7E7' }} />

            <Typography sx={{ marginBottom: '20px' }}>
                Our generator for other social media
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '12px', borderRadius: '16px' }}>
                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            Facebook Post Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Post your insights on facebook with awesome content!
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            Instagram Post Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Post your insights on instagram with awesome content!
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            Reddit Post Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Post your insights on Reddit with awesome content!
                        </Typography>
                    </CardContent>
                </Card>

                <Card sx={{ maxWidth: 270, minWidth: 250, maxHeight: 250 }} elevation={0}>
                    <CardContent>
                        <Card sx={{ maxWidth: 260, maxHeight: 200 }} elevation={0}>
                            <CardMedia
                                sx={{ height: 120, background: '#E7E7E7' }}
                                image="/static/images/cards/contemplative-reptile.jpg"
                                title="lizard-thumbnail"
                            />
                        </Card>
                        <Typography gutterBottom component="div" sx={{ marginTop: 2 }}>
                            Blog Generator
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Create an eye-catching and original blog that stands out.
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
};

export default MyCard;
